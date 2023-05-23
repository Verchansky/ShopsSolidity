// Подключение web3//////////////////////////////////////////////////////////////////////////////////////////////////////
const addressContract = "0x2688D8316378CD318599B2e1Aa86027b9327fda6";
const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idShop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_ozenka",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			}
		],
		"name": "AddRevie",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rating",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_idShop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_comId",
				"type": "uint256"
			}
		],
		"name": "create_otvet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_fio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_login",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "_password",
				"type": "bytes32"
			}
		],
		"name": "createAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idShop",
				"type": "uint256"
			}
		],
		"name": "createDownRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addresShop",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_pass",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "_nameShop",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_city",
				"type": "string"
			}
		],
		"name": "createShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idShop",
				"type": "uint256"
			}
		],
		"name": "createUpRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idShop",
				"type": "uint256"
			}
		],
		"name": "deleteShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_fio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_login",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "_pass",
				"type": "bytes32"
			}
		],
		"name": "registration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idReq",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_status",
				"type": "uint256"
			}
		],
		"name": "SwitchRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Requests",
		"outputs": [
			{
				"internalType": "address",
				"name": "User",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "typeReques",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "idShop",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "return_shop",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addressShop",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "password",
						"type": "bytes32"
					},
					{
						"internalType": "string",
						"name": "nameShop",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "workers",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "User",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "message",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "ozenka",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "User",
										"type": "address"
									},
									{
										"internalType": "uint256",
										"name": "rating",
										"type": "uint256"
									},
									{
										"internalType": "string",
										"name": "message",
										"type": "string"
									}
								],
								"internalType": "struct ContractShops.Otvet[]",
								"name": "otvets",
								"type": "tuple[]"
							}
						],
						"internalType": "struct ContractShops.BookReviews[]",
						"name": "coment",
						"type": "tuple[]"
					}
				],
				"internalType": "struct ContractShops.Shop[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnReq",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "User",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "typeReques",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "status",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "idShop",
						"type": "uint256"
					}
				],
				"internalType": "struct ContractShops.listUpDown[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idShop",
				"type": "uint256"
			}
		],
		"name": "returnWorkes",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "shops",
		"outputs": [
			{
				"internalType": "address",
				"name": "addressShop",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "nameShop",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "FIO",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "login",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


let web3, myContract, curentAccount, accounts;
let shops
async function getAccounts()
{
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
	accounts = await web3.eth.getAccounts();
	console.log(accounts);
}

getAccounts();
myContract = new web3.eth.Contract(abi, addressContract);

// ///////////////////////////////////////////////////////////////////Получение списка магазинов/////////////////////////////////////////////////////
async function getListShops()
{
	shops = await myContract.methods.return_shop().call();
}

async function getListReq()
{
	let requestsList = await myContract.methods.returnReq().call();
	return requestsList;
}

getListShops();


// ///////////////////////////////////////////////Переключение между регистрацией////////////////////////////////////////////////////////////////
document.querySelector(".btnRegSwitch").addEventListener("click", async () =>{
	document.querySelector(".Autorize").style = "display: none";
	document.querySelector(".regists").style = 'display: block';
})

document.querySelector(".btnBack").addEventListener("click", () => {
	document.querySelector(".Autorize").style = "display: block";
	document.querySelector(".regists").style = 'display: none';

})
////////////////////////////////////////////////////////////Функция входа//////////////////////////////////////////////////////////////
let entryBtn = document.querySelector(".btnEntry");
entryBtn.addEventListener("click", entryFunction);

async function entryFunction()
{
	let inputValue = document.querySelector(".loginInputEntry");
	let passValue = document.querySelector(".PassInputEntry");

	let result = await myContract.methods.users(inputValue.value).call();
	console.log(result);

	let flag = false;

	//Если пользователь входит как магазин
	if(result[2] == "0")
	{
		for(let i = 0; i < shops.length; i++)
		{
			if(shops[i][0] == inputValue.value)
			{
				if(shops[i][1] == web3.eth.accounts.hashMessage(passValue.value))
				{
					alert("Вход выполнен!")
					flag = true;

					document.querySelector(".entry").style = "display: none"

				}		
			}
		}
	}

	//Вход пользователя
	if(result[2] == web3.eth.accounts.hashMessage(passValue.value))
	{
		alert("Вход выполнен!")
		flag = true;

		document.querySelector(".entry").style = "display: none"

		if(result[3] == 2)
		{
			document.querySelector(".adminPage").style = "display: block";
			document.querySelector(".loginHeader").innerHTML = inputValue.value;
			document.querySelector(".balance").innerHTML = await web3.eth.getBalance(inputValue.value) / 10 ** 18 + "ETH"
			curentAccount = inputValue.value;
		}

	}	

	if(flag == false)
	{
		alert("Неверный логин или пароль!");
		inputValue.value = "";
		passValue.value = "";
	}
}

/////////////////////////////////////////////////////////Функция регистарции////////////////////////////////////////
let regBtn = document.querySelector(".btnReg");
regBtn.addEventListener("click", regFunction)

async function regFunction()
{
	let admin = "0xD6f55BAa86073c120e221c8Bc4303a21A519bEbf";
	let inputValue = document.querySelector(".loginInputReg");
	let passValue = document.querySelector(".PassInputReg");
	let Fio = document.querySelector(".FioInputReg");

	let result = await myContract.methods.users(inputValue.value).call();

	if(result[2] = "0")
	{
		let reg = await myContract.methods.registration(Fio.value, inputValue.value, web3.eth.accounts.hashMessage(passValue.value)).send({
			gas: 200000,
			from: admin,
		})
		alert("Аккаунт зарегистрирован!");
	}
}


////////////////////////////////////////////////////////switchButtons///////////////////////////////////////////////
document.querySelector("#addAdmin").addEventListener("click", async () =>
{	
	document.querySelector("#listReq").style = "font-weight: normal";
	document.querySelector("#addAdmin").style = "font-weight: bold";
	document.querySelector("#ListShops").style = "font-weight: normal";
	document.querySelector("#CreateShop").style = "font-weight: normal";

	document.querySelector(".listRequests").style = "display: none";
	document.querySelector(".listShopsFolder").style = "display: none";
	document.querySelector(".addAdminFolder").style = "display: flex";
	document.querySelector(".CreateShopFolder").style = "display: none";
})

document.querySelector("#listReq").addEventListener("click", async () =>
{	
	document.querySelector("#listReq").style = "font-weight: bold";
	document.querySelector("#addAdmin").style = "font-weight: normal";
	document.querySelector("#ListShops").style = "font-weight: normal";
	document.querySelector("#CreateShop").style = "font-weight: normal";

	document.querySelector(".listRequests").style = "display: flex";
	document.querySelector(".listShopsFolder").style = "display: none";
	document.querySelector(".addAdminFolder").style = "display: none";
	document.querySelector(".CreateShopFolder").style = "display: none";

})

document.querySelector("#ListShops").addEventListener("click", async () =>
{	
	document.querySelector("#listReq").style = "font-weight: normal";
	document.querySelector("#addAdmin").style = "font-weight: normal";
	document.querySelector("#ListShops").style = "font-weight: bold";
	document.querySelector("#CreateShop").style = "font-weight: normal";

	document.querySelector(".listRequests").style = "display: none";
	document.querySelector(".listShopsFolder").style = "display: flex";
	document.querySelector(".addAdminFolder").style = "display: none";
	document.querySelector(".CreateShopFolder").style = "display: none";
})

document.querySelector("#CreateShop").addEventListener("click", async () =>
{	
	document.querySelector("#listReq").style = "font-weight: normal";
	document.querySelector("#addAdmin").style = "font-weight: normal";
	document.querySelector("#ListShops").style = "font-weight: normal";
	document.querySelector("#CreateShop").style = "font-weight: bold";

	document.querySelector(".listRequests").style = "display: none";
	document.querySelector(".listShopsFolder").style = "display: none";
	document.querySelector(".addAdminFolder").style = "display: none";
	document.querySelector(".CreateShopFolder").style = "display: flex";
})

//////////////////////////////////////////////////////////////AddAdmin///////////////////////////////////////////////
let addAdminBtn = document.querySelector("#addAdminBtn");
addAdminBtn.addEventListener("click", addAdminFunc)

async function addAdminFunc()
{
	let addresInput = document.querySelector(".addresInput");
	let FioInput = document.querySelector(".FIOInput");
	let LoginInput = document.querySelector(".LoginInput");
	let PasswordInput = document.querySelector(".PasswordInput");

	let result = await myContract.methods
				.createAdmin(addresInput.value, FioInput.value, LoginInput.value, web3.eth.accounts.hashMessage(PasswordInput.value))
				.send({
					gas: 200000,
					from: curentAccount,
				})
	alert("Администратор создан!");
	addresInput.value = "";
	FioInput.value = "";
	LoginInput.value = "";
	PasswordInput.value = "";
}

//////////////////////////////////////////////////////ListRequests////////////////////////////////////////////////////////////////
let listRequestsBtn = document.querySelector("#listReq")
listRequestsBtn.addEventListener("click", addList)

async function addList()
{
	await createList();

	let divs = document.querySelectorAll(".Request");

	divs.forEach(element => {
		element.remove();
	});

	await createList();
	AcceptUpgrade();
}

async function createList()
{
	let listRequests = document.querySelector(".listRequests");
	let list = await getListReq();
	for(let i = 0; i < list.length; i++)
	{
		let div = document.createElement("div");
		div.classList.add("Request")

		let inputNumber = document.createElement("input");
		inputNumber.classList.add("RequestNumber");
		inputNumber.value = i;
		inputNumber.style = "width: 20px"

		let User = document.createElement("input");
		User.classList.add("user");
		User.value = list[i][0];


		let typeRequest = document.createElement("input");
		typeRequest.classList.add("typeRequest");

		if(list[i][1] == 1)
		{
			typeRequest.value = "Повышение";
		}
		else
		{
			typeRequest.value = "Понижение"
		}


		let NumberShop = document.createElement("input");
		NumberShop.classList.add("NumberShop")
		NumberShop.value = list[i][3];

		let btnAccept = document.createElement("button");
		btnAccept.classList.add("btn-accept");
		btnAccept.innerHTML = "Принять"

		let btnCancel = document.createElement("button");
		btnCancel.classList.add("btn-cancl");
		btnCancel.innerHTML = "Отклонить"

		if(list[i][2] == 1)
		{
			btnAccept.disabled = true;
			btnCancel.disabled = true;
		}

		listRequests.append(div);
		div.append(inputNumber);
		div.append(User);
		div.append(typeRequest);
		div.append(NumberShop);
		div.append(btnAccept);
		div.append(btnCancel);

	}
}


/////////////////////////////////////////////////////////accpet upgrade

async function AcceptUpgrade()
{	
	let btnAcceptList = document.querySelectorAll(".btn-accept");
	let btnCancelList = document.querySelectorAll(".btn-cancl");

	for(let i = 0; i < btnAcceptList.length; i++)
	{	
		let idlsit = document.querySelectorAll(".RequestNumber");
		btnAcceptList[i].addEventListener("click", async () =>
		{
			let result = myContract.methods.SwitchRole(idlsit[i].value, 1).send({
				gas: 200000,
				from: curentAccount,
			});

			alert("Заявка принята");
			btnAcceptList[i].disabled = true;
			btnCancelList[i].disabled = true;

		})
	}
}

//////////////////////////////////////////////////ListShops
let listShopsBtn = document.querySelector("#ListShops")
listShopsBtn.addEventListener("click", addListShop)

async function addListShop()
{
	
	await createListShop();

	let divs = document.querySelectorAll(".Shops");

	divs.forEach(element => {
		element.remove();
	});

	await createListShop();
	console.log(shops);
}

async function createListShop()
{	
	getListShops();
	let listRequests = document.querySelector(".listShopsFolder");
	for(let i = 0; i < shops.length; i++)
	{
		let div = document.createElement("div");
		div.classList.add("Shops")

		let ShopNumber = document.createElement("input");
		ShopNumber.classList.add("ShopNumber");
		ShopNumber.value = i;
		ShopNumber.style = "width: 20px"

		let address = document.createElement("input");
		address.classList.add("addrress");
		address.value = shops[i][0];


		let NameShop = document.createElement("input");
		NameShop.classList.add("NameShop");
		NameShop.value = shops[i][2];


		let city = document.createElement("input");
		city.classList.add("city")
		city.value = shops[i][3];

		let btnCancel = document.createElement("button");
		btnCancel.classList.add("btn-cancl");
		btnCancel.innerHTML = "Удалить"

		listRequests.append(div);
		div.append(ShopNumber);
		div.append(address);
		div.append(NameShop);
		div.append(city);
		div.append(btnCancel);

	}
}

///////////////////////////////////////////////////////////////////////////////////delete shop





/////////////////////////////////////////////////////////////////////////////////////////////create shop
let addShop = document.querySelector("#addShopBtn");
addShop.addEventListener("click", addShopFunc)

async function addShopFunc()
{
	let addresShopInput = document.querySelector(".addresShopInput");
	let NameShopInput = document.querySelector(".NameShopInput");
	let CityInput = document.querySelector(".CityInput");
	let InputPassworShop = document.querySelector(".InputPassworShop");

	let result = await myContract.methods
				.createShop(addresShopInput.value, web3.eth.accounts.hashMessage(InputPassworShop.value), NameShopInput.value, CityInput.value)
				.send({
					gas: 200000,
					from: curentAccount,
				})
	alert("Магазин создан!");
	addresShopInput.value = "";
	NameShopInput.value = "";
	CityInput.value = "";
	InputPassworShop.value = "";
}
