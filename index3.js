const candyname = document.querySelector('.cname');
const description = document.querySelector('.descr');
const price = document.querySelector('.price');
const quantity = document.querySelector('.qty');

const form = document.getElementById('my-form');
const list = document.getElementById('items');
let obj = {
    name: '',
    descr: '',
    price: '',
    quantity: ''
};

function createli(user) {
    const li = document.createElement('li');
    li.innerHTML = `${user.name} ${user.descr} ${user.price} ${user.quantity} `;

    const buy1 = document.createElement('button');

    buy1.style.width = '50px';
    buy1.style.height = '25px';
    buy1.innerHTML = 'buy1';
    buy1.className = 'buy1';
    buy1.setAttribute('data-id',user._id);
 

    const buy2 = document.createElement('button');

    buy2.style.width = '50px';
    buy2.style.height = '25px';
    buy2.innerHTML = 'buy2';
    buy2.className = 'buy2';
    buy2.setAttribute('data-id',user._id);
    

    const buy3 = document.createElement('button');
   

    buy3.style.width = '50px';
    buy3.style.height = '25px';
    buy3.innerHTML = 'buy3';
    buy3.className = 'buy3';
    buy3.setAttribute('data-id',user._id);
  

    li.appendChild(buy1);
    li.appendChild(buy2);
    li.appendChild(buy3);
    li.style.boxShadow='5px 5px 5px rgb(250 255 250)'
    list.appendChild(li);
    list.style.background='magenta';
    
}

function showData() {
    axios.get('https://crudcrud.com/api/a9e08d6eac3d4253aeed0c389fd7ce25/candyData')
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                createli(response.data[i]);
            }
        })
        .catch((error) => console.log(error));
}

document.addEventListener('DOMContentLoaded', showData);

const btn = document.getElementById('submitbtn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    obj.name = candyname.value;
    obj.descr = description.value;
    obj.price = price.value;
    obj.quantity = quantity.value;
    axios.post("https://crudcrud.com/api/a9e08d6eac3d4253aeed0c389fd7ce25/candyData", obj)
        .then((response) => {
            createli(response.data);
            console.log(response.data);
            form.reset();
        })
        .catch((error) => console.log(error));
});

list.addEventListener('click', e => {
    if (e.target.classList.contains('buy1')) {
      const id = e.target.getAttribute('data-id');
      console.log(id);
      const text = e.target.parentElement.innerHTML;
      console.log(text);
      const elements=text.split(' ');
      console.log(elements);
      const quantityElement=elements[3];
      if (quantityElement) { // Check that quantityElement exists before trying to access its value
        const updatedQuantity = parseInt(quantityElement) - 1;
        console.log(updatedQuantity);
        axios.put(`https://crudcrud.com/api/a9e08d6eac3d4253aeed0c389fd7ce25/candyData/${id}`, {
            name: elements[0],
            descr:elements[1],
            price: elements[2],
            quantity: updatedQuantity,
          })
          .then(response => {
            console.log(response.data);
            const updatedUser = response.data;
            const updatedLi = document.createElement('li');
            updatedLi.innerHTML = `${updatedUser.name} ${updatedUser.descr} ${updatedUser.price} ${updatedUser.quantity}`;
            const buy1 = document.createElement('button');
            buy1.className = 'buy1';
            const buy2 = document.createElement('button');
            buy2.className = 'buy2';
            const buy3 = document.createElement('button');
            buy3.className = 'buy3';
            updatedLi.appendChild(buy1);
            updatedLi.appendChild(buy2);
            updatedLi.appendChild(buy3);
            e.target.parentElement.replaceWith(updatedLi);
            
        })
          .catch(error => console.log(error));
      }
    }
    if (e.target.classList.contains('buy2')) {
        const id = e.target.getAttribute('data-id');
        console.log(id);
        const text = e.target.parentElement.innerHTML;
        console.log(text);
        const elements=text.split(' ');
        console.log(elements);
        const quantityElement=elements[3];
        if (quantityElement) { // Check that quantityElement exists before trying to access its value
          const updatedQuantity = parseInt(quantityElement) - 2;
          console.log(updatedQuantity);
          axios.put(`https://crudcrud.com/api/a9e08d6eac3d4253aeed0c389fd7ce25/candyData/${id}`, {
              name: elements[0],
              descr:elements[1],
              price: elements[2],
              quantity: updatedQuantity,
            })
            .then(response => {
              console.log(response.data);
              const updatedUser = response.data;
              const updatedLi = document.createElement('li');
              updatedLi.innerHTML = `${updatedUser.name} ${updatedUser.descr} ${updatedUser.price} ${updatedUser.quantity}`;
              const buy1 = document.createElement('button');
              buy1.className = 'buy1';
              const buy2 = document.createElement('button');
              buy2.className = 'buy2';
              const buy3 = document.createElement('button');
              buy3.className = 'buy3';
              updatedLi.appendChild(buy1);
              updatedLi.appendChild(buy2);
              updatedLi.appendChild(buy3);
              e.target.parentElement.replaceWith(updatedLi);
              
          })
            .catch(error => console.log(error));
        }
      }
      if (e.target.classList.contains('buy3')) {
        const id = e.target.getAttribute('data-id');
        console.log(id);
        const text = e.target.parentElement.innerHTML;
        console.log(text);
        const elements=text.split(' ');
        console.log(elements);
        const quantityElement=elements[3];
        if (quantityElement) { // Check that quantityElement exists before trying to access its value
          const updatedQuantity = parseInt(quantityElement) - 3;
          console.log(updatedQuantity);
          axios.put(`https://crudcrud.com/api/a9e08d6eac3d4253aeed0c389fd7ce25/candyData/${id}`, {
              name: elements[0],
              descr:elements[1],
              price: elements[2],
              quantity: updatedQuantity,
            })
            .then(response => {
              console.log(response.data);
              const updatedUser = response.data;
              const updatedLi = document.createElement('li');
              updatedLi.innerHTML = `${updatedUser.name} ${updatedUser.descr} ${updatedUser.price} ${updatedUser.quantity}`;
              const buy1 = document.createElement('button');
              buy1.className = 'buy1';
              const buy2 = document.createElement('button');
              buy2.className = 'buy2';
              const buy3 = document.createElement('button');
              buy3.className='buy3';
              updatedLi.appendChild(buy1);
              updatedLi.appendChild(buy2);
              updatedLi.appendChild(buy3);
              e.target.parentElement.replaceWith(updatedLi);
              
          })
            .catch(error => console.log(error));
        }
      }
  });
  