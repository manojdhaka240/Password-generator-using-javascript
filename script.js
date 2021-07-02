const uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!#$%&()/.<>:@?';


const pLength = document.getElementById('p-length');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const pNumber = document.getElementById('p-number');
const pSymbol = document.getElementById('p-symbol');
const submit = document.getElementById('submit');


submit.addEventListener("click",()=>{
    let IntialPassword = "";
    upperCase.checked ? IntialPassword+=uCase : "";
    lowerCase.checked ? IntialPassword+=lCase : "";
    pNumber.checked ? IntialPassword+=number : "";
    pSymbol.checked ? IntialPassword+=symbol : "";

    GeneratePassword(pLength.value , IntialPassword);
});

let content = document.getElementById('answer');

const x =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()/.<>:@?';
function GeneratePassword(len,str){
    let password ='';
    if(str=='')
    {
        for (i = 1; i <= len; i++)
        {
            let char = Math.floor(Math.random()*x.length);
            password += x[char];
        }
    }
    else
    {
        for (i = 1; i <= len; i++)
        {
            let char = Math.floor(Math.random()*str.length);
            password += str.charAt(char);
        }
    }
    content.innerHTML = "Your password is: " + password;
    display(password);
}

const mp ={
    a : "apple",
    b : "banana",
    c : "computer",
    d : "drip",
    e : "egg",
    f : "fruit",
    g : "gallery",
    h : "hero",
    i : "iphone",
    j : "jack",
    k : "korean ",
    l : "laptop",
    m : "music",
    n : "nut",
    o : "occupation",
    p : "polyester",
    q : "question",
    r : "rope",
    s : "shoot",
    t : "technology",
    u : "umbrella",
    v : "visa",
    w : "washington",
    x : "xbox",
    y : "you",
    z : "zigzag",
    0 : "Zero",
    1 : "One",
    2  :"Two",
    3 : "Three",
    4 : "Four",
    5 : "Five",
    6 : "Six",
    7 : "Seven",
    8 : "Eight",
    9 : "Nine",
    '!' : "Exclamation",
    '#' : "hash",
    '$' : "Dollar",
    '%' : "Percent",
    '&' : "Ampersand",
    '(' : "Left_parenthesis",
    ')' : "Right_parenthesis",
    '/' : "Slash",
    '.' : "dot",
    '<' : "Less_than",
    '>' : "Greater_than",
    ':' : "Colon",
    '@' : "At",
    '?' : "Question_mark"
};

let content1 = document.getElementById('trick');
function display(pass)
{
    let ans = '';
    for(let i=0;i<pass.length;i++)
    {
        let char = pass[i];
        if(char>='A' && char<='Z')
        {
            const code = pass.charCodeAt(i)+32;
            const s = mp[String.fromCharCode(code)].toUpperCase();
            ans += ' ' + s;
        }
        else
        {
            ans+= ' ' + mp[char];
        }
    }
    content1.innerHTML = "How to remember password= " + ans;
}
