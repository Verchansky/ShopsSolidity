const addressContract = "0x65A7ed6307bb9A95629Bbf80C113E323e022916D";
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
];


let web3, myContract, curentAccount, accounts;

async function getAccounts()
{
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
	accounts = await web3.eth.getAccounts();

	console.log(accounts);
}

getAccounts();
myContract = new web3.eth.Contract(abi, addressContract);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector(".btnRegSwitch").addEventListener("click", async () =>{
	document.querySelector(".Autorize").style = "display: none";
	document.querySelector(".regists").style = 'display: block';
})

document.querySelector(".btnBack").addEventListener("click", () => {
	document.querySelector(".Autorize").style = "display: block";
	document.querySelector(".regists").style = 'display: none';
})