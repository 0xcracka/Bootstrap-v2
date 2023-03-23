pragma solidity ^0.8.0;

contract YourContract {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowed;

   constructor(uint256 _initialSupply, string memory _tokenName, string memory _tokenSymbol, uint8 _tokenDecimals) {
    totalSupply = _initialSupply * 10 ** uint256(_tokenDecimals);
    balances[msg.sender] = totalSupply;
    name = _tokenName;
    symbol = _tokenSymbol;
    decimals = _tokenDecimals;
}

    function transfer(address recipient, uint256 amount) public returns (bool) {
        require(balances[msg.sender] >= amount, "Insufficient balance.");
        require(balances[recipient] + amount >= balances[recipient], "Overflow.");

        balances[msg.sender] -= amount;
        balances[recipient] += amount;

        emit Transfer(msg.sender, recipient, amount);

        return true;
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        allowed[msg.sender][spender] = amount;

        emit Approval(msg.sender, spender, amount);

        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        require(balances[sender] >= amount, "Insufficient balance.");
        require(balances[recipient] + amount >= balances[recipient], "Overflow.");
        require(allowed[sender][msg.sender] >= amount, "Allowance insufficient.");

        balances[sender] -= amount;
        balances[recipient] += amount;
        allowed[sender][msg.sender] -= amount;

        emit Transfer(sender, recipient, amount);

        return true;
    }

    function balanceOf(address account) public view returns (uint256) {
        return balances[account];
    }

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function mint(address recipient, uint256 amount) public {
    require(recipient != address(0), "Invalid address");
    require(amount > 0, "Invalid amount");

    totalSupply += amount;
    balances[recipient] += amount;

    emit Transfer(address(0), recipient, amount);
    }


}
