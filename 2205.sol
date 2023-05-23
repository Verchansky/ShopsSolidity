// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract ContractShops {
    
    struct Shop //Структура магазина
    {   
        address addressShop;
        bytes32 password;
        string nameShop;
        string city;
        address [] workers; //Работники магазина
        BookReviews[] coment; //комментарии пользователя
    }
 
    struct User //Структура пользователя
    {
        string FIO;
        string login;
        bytes32 password;
        uint role; //2 - администратор 1 - продавец 0 - покупатель
    }

    struct BookReviews//Структура Книги Жалоб. Коментарии пользователей.
    {
        address User;
        string message;
        uint ozenka;
        Otvet [] otvets;

    }

    struct Otvet //Структура отзывов к комментариям
    {               
        address User;
        uint rating; //Оценка комментария 0-like 1-dislike
        string message;//Текст отзыва
    }


    struct listUpDown //Структура повышения
    {
        address User;
        uint typeReques; // 0 - Создание заявки на понижение 1 - Создание заявки на повышение
        uint status; //1 - принята //0 - ожидание/отклонена
        uint idShop;
    }

    mapping(address => User) public users;

    Shop[] public shops;
    listUpDown[] public Requests;

    constructor()
    {
        users[0xbe0cA7a2910519E0E8A6E11B5A39D3A13B262fa9] = 
            User("DDD", "dimon", 0x3b453794f074c43f21713fe98eaccb2728a71bd4584e5d5958e7e73546e02603, 2);
        
        users[0xf2bfDEaeC58d2046664203679A4290607Ba57dCF] = 
            User("AAA", "alex", 0x3b453794f074c43f21713fe98eaccb2728a71bd4584e5d5958e7e73546e02603, 1);

        users[0xf1f406f26A25a9EB9c697B22eb27C181d975Aa16] = 
            User("RRR", "rus", 0x3b453794f074c43f21713fe98eaccb2728a71bd4584e5d5958e7e73546e02603, 0);

            // 0xdD870fA1b7C4700F2BD7f44238821C26f7392148


        shops.push();
        shops[shops.length-1].addressShop = 0x922e39F88acf546Fc03176a5A5B7ED828a37DfAB;
        shops[shops.length-1].password = 0x3b453794f074c43f21713fe98eaccb2728a71bd4584e5d5958e7e73546e02603;
        shops[shops.length-1].nameShop = "Shop 1";
        shops[shops.length-1].city = "Moscow";
        shops[shops.length-1].workers.push(0xbe0cA7a2910519E0E8A6E11B5A39D3A13B262fa9);

    }

    //Функиця регистарции
    function registration(string memory _fio, string memory _login, bytes32 _pass) public
    {
        bool flagAddress = true;
        for(uint i = 0; i < shops.length; i++)
        {
            if(shops[i].addressShop == msg.sender)
            {
                flagAddress = false;
            }
        }

        if(flagAddress)
        {
            users[msg.sender] = User(_fio, _login, _pass, 0);
        }
    }

    //Функции создания запроса на повышения
    function createUpRole(uint _idShop) public 
    {
        require(users[msg.sender].role == 0 || users[msg.sender].role == 1, "This is not for you"); 
        Requests.push(listUpDown(msg.sender, 1, 0, _idShop));
    }   

    function  createDownRole(uint _idShop) public
    {
        require(users[msg.sender].role == 2 || users[msg.sender].role == 1, "This is not for you");
        Requests.push(listUpDown(msg.sender, 0, 0, _idShop));
    }

    //Создание нового администратора
    function createAdmin(address _address, string memory _fio, string memory _login, bytes32 _password) public
    {   
        require(users[msg.sender].role == 2, "You are not admin");

        bool flagAddress = true;
        for(uint i = 0; i < shops.length; i++)
        {
            if(shops[i].addressShop == msg.sender)
            {
                flagAddress = false;
            }
        }

        if(flagAddress)
        {
            users[_address] = User(_fio, _login, _password, 2);
        }
    }

    //Создание нового магазина
    function createShop(address _addresShop, bytes32 _pass, string memory _nameShop, string memory _city) public
    {

        require(users[msg.sender].role == 2, "You are not admin");
        require(users[_addresShop].password == 0, "Account already used");

        bool flagAddress = true;
            for(uint i = 0; i < shops.length; i++)
            {
                if(shops[i].addressShop == _addresShop)
                {
                    flagAddress = false;
                }
            }

            if(flagAddress)
            {
                shops.push();
                shops[shops.length-1].addressShop = _addresShop;
                shops[shops.length-1].password = _pass;
                shops[shops.length-1].nameShop = _nameShop;
                shops[shops.length-1].city = _city;
            }

    }


    // Удаление магазина
    function deleteShop(uint _idShop) public
    {
        require(users[msg.sender].role == 2, "You are not admin");
        require(_idShop <= shops.length-1, "Uncorrect value!");

        for(uint i = 0; i < shops[_idShop].workers.length; i++)
        {
            users[shops[_idShop].workers[i]].role = 0; 
        }


        delete shops[_idShop];
    }


    //Просмотр списка доступных магазинов
    function return_shop() public view returns(Shop[] memory)
    {
        return shops;
    }


    //Повышение/понижение ролей
    function SwitchRole(uint _idReq, uint _status) public 
    {   
        require(users[msg.sender].role == 2, "You are not admin");

        if(Requests[_idReq].typeReques == 0 && _status == 1)
        {
            for(uint i = 0; i < shops[Requests[_idReq].idShop].workers.length; i++)
            {
                if (Requests[_idReq].User == shops[Requests[_idReq].idShop].workers[i])
                {
                    delete shops[Requests[_idReq].idShop].workers[i];
                }
            }
            
            users[Requests[_idReq].User].role = 0;
            Requests[_idReq].status = 1;
        }

        else if(Requests[_idReq].typeReques == 1 && _status == 1)
        {   
            shops[Requests[_idReq].idShop].workers.push(Requests[_idReq].User);
            Requests[_idReq].status = 1;
            users[Requests[_idReq].User].role = 1;
        }

        else
        {
            Requests[_idReq].status = 0;
        }
    }

    //Выставление оценки работы магазина
    function AddRevie(uint _idShop, uint _ozenka, string memory _message) public
    {   
        require(users[msg.sender].role == 0, "This is not for you");
        require(_idShop <= shops.length-1, "Uncorect value");

        // address User;
        // string message;
        // uint ozenka;

        shops[_idShop].coment.push();
        shops[_idShop].coment[shops[_idShop].coment.length-1].User = msg.sender;
        shops[_idShop].coment[shops[_idShop].coment.length-1].message = _message;
        shops[_idShop].coment[shops[_idShop].coment.length-1].ozenka = _ozenka;
    }

    //Ответ на отзыв
    function create_otvet (uint _rating, string memory _message, uint _idShop, uint _comId) public {

        // address User;
        // uint rating; //Оценка комментария 1 - +  0 - +
        // string message;//Текст отзыва

        shops[_idShop].coment[_comId].otvets.push(Otvet(msg.sender, _rating, _message));
    }

    //Список работников магазина
    function returnWorkes(uint _idShop) public view returns(address[] memory)
    {
        return shops[_idShop].workers;
    }
    
    //Список всез заявок
    function returnReq() public view returns(listUpDown[] memory)
    {
        return Requests;
    }
        



}