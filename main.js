let cart=[], total=0;

function addCart(item,price){
  cart.push(`${item} - ₹${price}`);
  total+=price;
  renderCart();
  document.getElementById("cart").style.display="block";
}

function renderCart(){
  const ul=document.getElementById("cartItems");
  ul.innerHTML="";
  cart.forEach(i=>{
    let li=document.createElement("li");
    li.textContent=i;
    ul.appendChild(li);
  });
  document.getElementById("total").innerText="Total: ₹"+total;
}

function openCart(){document.getElementById("cart").style.display="block";}
function closeCart(){document.getElementById("cart").style.display="none";}

function sendWhatsApp(){
  const msg="Order from Foodies 99:\n"+cart.join("\n")+"\nTotal: ₹"+total;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=`+encodeURIComponent(msg));
    }
