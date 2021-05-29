$(document).ready(function() {

	var categories = {
		'jackets': {
			name: 'Jackets',
			imgUrl: './img/categories/jackets.jpg',
			products: {
				1: {
					name: 'Jacket 1',
					description: 'Description Jacket 1',
					imgUrl: './img/Jackets/jacket1.jpg',
					price: 100
				},
				2: {
					name: 'Jacket 2',
					description: 'Description Jacket 2',
					imgUrl: './img/Jackets/jacket2.jpg',
					price: 200
				},
				3: {
					name: 'Jacket 3',
					description: 'Description Jacket 3',
					imgUrl: './img/Jackets/jacket3.jpg',
					price: 300
				},
				4: {
					name: 'Jacket 4',
					description: 'Description Jacket 4',
					imgUrl: './img/Jackets/jacket4.jpg',
					price: 400
				},
				5: {
					name: 'Jacket 5',
					description: 'Description Jacket 5',
					imgUrl: './img/Jackets/jacket5.jpg',
					price: 500
				},
				6: {
					name: 'Jacket 6',
					description: 'Description Jacket 6',
					imgUrl: './img/Jackets/jacket6.jpg',
					price: 600
				}
			}
		},
		'shirts': {
			name: 'Shirts',
			imgUrl: './img/categories/shirts.jpg',
			products: {
				1: {
					name: 'Shirt 1',
					description: 'Description Shirt 1',
					imgUrl: './img/Shirts/shirt1.jpg',
					price: 100
				},
				2: {
					name: 'Shirt 2',
					description: 'Description Shirt 2',
					imgUrl: './img/Shirts/shirt2.jpg',
					price: 200
				},
				3: {
					name: 'Shirt 3',
					description: 'Description Shirt 3',
					imgUrl: './img/Shirts/shirt3.jpg',
					price: 300
				},
				4: {
					name: 'Shirt 4',
					description: 'Description Shirt 4',
					imgUrl: './img/Shirts/shirt4.jpg',
					price: 400
				},
				5: {
					name: 'Shirt 5',
					description: 'Description Shirt 5',
					imgUrl: './img/Shirts/shirt5.jpg',
					price: 500
				},
				6: {
					name: 'Shirt 6',
					description: 'Description Shirt 6',
					imgUrl: './img/Shirts/shirt6.jpg',
					price: 600
				}
			}
		},
		'trousers': {
			name: 'Trousers',
			imgUrl: './img/categories/trousers.jpg',
			products: {
				1: {
					name: 'Trouser 1',
					description: 'Description Trouser 1',
					imgUrl: './img/Trousers/trouser1.jpeg',
					price: 100
				},
				2: {
					name: 'Trouser 2',
					description: 'Description Trouser 2',
					imgUrl: './img/Trousers/trouser2.jpeg',
					price: 200
				},
				3: {
					name: 'Trouser 3',
					description: 'Description Trouser 3',
					imgUrl: './img/Trousers/trouser3.jpeg',
					price: 300
				},
				4: {
					name: 'Trouser 4',
					description: 'Description Trouser 4',
					imgUrl: './img/Trousers/trouser4.jpeg',
					price: 400
				},
				5: {
					name: 'Trouser 5',
					description: 'Description Trouser 5',
					imgUrl: './img/Trousers/trouser5.jpeg',
					price: 500
				},
				6: {
					name: 'Trouser 6',
					description: 'Description Trouser 6',
					imgUrl: './img/Trousers/trouser6.jpeg',
					price: 600
				}
			}
		},
		'shoes': {
			name: 'Shoes',
			imgUrl: './img/categories/shoes.jpg',
			products: {
				1: {
					name: 'Shoes 1',
					description: 'Description Shoe 1',
					imgUrl: './img/Shoes/shoe1.jpeg',
					price: 100
				},
				2: {
					name: 'Shoes 2',
					description: 'Description Shoe 2',
					imgUrl: './img/Shoes/shoe2.jpeg',
					price: 200
				},
				3: {
					name: 'Shirt 3',
					description: 'Description Shoe 3',
					imgUrl: './img/Shoes/shoe3.jpeg',
					price: 300
				},
				4: {
					name: 'Shoes 4',
					description: 'Description Shoe 4',
					imgUrl: './img/Shoes/shoe4.jpeg',
					price: 400
				},
				5: {
					name: 'Shoes 5',
					description: 'Description Shoe 5',
					imgUrl: './img/Shoes/shoe5.jpeg',
					price: 500
				},
				6: {
					name: 'Shoes 6',
					description: 'Description Shoe 6',
					imgUrl: './img/Shoes/shoe6.jpeg',
					price: 600
				}
			}
		},
		'hats': {
			name: 'Hats',
			imgUrl: './img/categories/hats.jpeg',
			products: {
				1: {
					name: 'Hat 1',
					description: 'Description Hat 1',
					imgUrl: './img/Hats/hat1.jpeg',
					price: 100
				},
				2: {
					name: 'Hat 2',
					description: 'Description Hat 2',
					imgUrl: './img/Hats/hat2.jpeg',
					price: 200
				},
				3: {
					name: 'Hat 3',
					description: 'Description Hat 3',
					imgUrl: './img/Hats/hat3.jpeg',
					price: 300
				},
				4: {
					name: 'Hat 4',
					description: 'Description Hat 4',
					imgUrl: './img/Hats/hat4.jpeg',
					price: 400
				},
				5: {
					name: 'Hat 5',
					description: 'Description Hat 5',
					imgUrl: './img/Hats/hat5.jpeg',
					price: 500
				},
				6: {
					name: 'Hat 6',
					description: 'Description Hat 6',
					imgUrl: './img/Hats/hat6.jpeg',
					price: 600
				}
			}
		}
	}

	createHeader();

	var content = document.createElement('div');
	content.className = 'content';
	document.body.appendChild(content);

	createCategoryList(categories);

	createProductList(categories);

	createContactForm();

	showCategoryList();

	createFooter();
});



function createHeader(){
	var header = `
	<div class= "limiter">
		<nav class="navbar navbar-dark navbar-expand-sm bg-dark">
			<div class="container-fluid">

				<a class="navbar-brand" href="#">
					<img class="logo" src="img/logo.gif" />
				</a>
				<h2 class="text-white">Your Fashion</h2>
				<button class="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#Navbar">
					<span class="navbar-toggler-icon"></span>
				</button>


				<div class="collapse navbar-collapse" id="Navbar">
					<ul class="navbar-nav ml-auto">
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="home" onClick = showCategoryList()>Home</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="contact" onClick = showContactForm()>Contact</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="jackets" onClick = showProductList('jackets')>Jackets</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="shirts" onClick = showProductList('shirts')>Shirts</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="trousers" onClick = showProductList('trousers')>Trousers</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="shoes" onClick = showProductList('shoes')>Shoes</a>
						</li>
						<li class="nav-items m-2 pl-2 pr-2 rounded">
							<a class="nav-link" href="#" id="hats" onClick = showProductList('hats')>Hats</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		</div>`;
	
	var content = document.createElement('header');
	content.innerHTML = header;
	document.body.appendChild(content);
}

function createCategoryList(categories) {


	var categoryList = '<div class="row text-center text-white categories limiter">';
	categoryList += '<h1 class="col-12 text-dark">Products</h1>';

	var counter_1 = 0;
	for (category in categories) {
		if (counter_1 < 3 ) {
			categoryList += '<div class="col-12 col-md-4 p-0 background" style="background-image:url(\''+categories[category]['imgUrl']+'\');">';
		}
		else{
			categoryList += '<div class="col-12 col-md-6 p-0 background" style="background-image:url(\''+categories[category]['imgUrl']+'\');">';
			if (counter_1 == 5) {
				counter_1 == 0;
			}
		}
		categoryList += `
				<div class="overlay"></div>
				<div class="position-absolute w-100 pt-5">
					<h1>` + categories[category]['name'] + `</h1>
					<button id="` + category + `" class="btn mt-5 pl-5 pr-5 pt-2 pb-2" onClick = showProductList(this.id)>Click To Buy</button>
				</div>
			</div>
		`;
		counter_1++;
	}

	categoryList +=	'</div>';

	$(".content").append(categoryList);
}

function createProductList(categories){

	var productList = '';
	var category_name = '';

	for (category in categories) {

		productList = '<div class="row text-center text-white products '+category+' limiter">';
		
		category_name = categories[category]['name'];
		productList += '<h1 class="col-12 text-dark">'+category_name+'</h1>';

		for (product in categories[category]['products']) {

			var productName = categories[category]['products'][product]['name'];
			var productDescription = categories[category]['products'][product]['description'];
			var productImgUrl = categories[category]['products'][product]['imgUrl'];
			var productPrice = categories[category]['products'][product]['price'];

			productList += `
				<div class="col-md-4 p-0 background" style="background-image:url('`+productImgUrl+`');" productName="`+productName+`" productDescription="`+productDescription+`" productImgUrl="`+productImgUrl+`" productPrice="`+productPrice+`" onClick = viewProduct(this)>
			 		<div class="overlay"></div>
			 		<div class="position-absolute w-100 pt-5">
			 			<h1>`+ category_name + ' ' + product + `</h1>
			 			<h4 class="pt-5">`+ category_name + ` Description ` + product + `</h4>
				 	</div>
				</div>`;

		}
		productList += '</div>';

		$(".content").append(productList);	
	}
}

function createContactForm(){

	var contactForm = `
	<div class= "limiter">
		<div class="contact_form pb-md-4">
			<h1 class="pl-3 pl-md-5 pt-3 pb-3 font-weight-bold">Contact:</h1>
			
		</div>
		</div>
	`;

	$(".content").append(contactForm);
}

function showCategoryList(){
	$(".row, .contact_form").hide();
	$(".categories").show();
	$('.product_details').remove('');
}

function showProductList(category){
	$(".row, .contact_form").hide();
	$("."+category).show();
}

function viewProduct(product){

	$(".row").hide();

	$('.product_details').remove('');

	var name = product.getAttribute('productName');
	var description = product.getAttribute('productDescription');
	var imgUrl = product.getAttribute('productImgUrl');
	var price = product.getAttribute('productPrice');

	var product = `
	<dic class= "limiter" style= "margin-left: 100px">
		<div class="row product_details ml-md-5 p-4 p-md-5">
			<h3 class="font-weight-bold w-100">` + name + `</h4>
			<h4 class="font-weight-bold w-100">` + description + `</h4>
			<img class="col-md-4 p-0" src=" ` + imgUrl + ` "/>
			<h6 class="w-100">Price: <span class="font-weight-bold">` + price + `</span></h6>
		</div>
		</div>
	`; 


	$(".content").append(product);	
}

function showContactForm(){
	$('.row').hide();
	$('.contact_form').show();
}

function createFooter(){
	var footer = document.createElement('footer');
	footer.className = 'text-center border p-2 limiter';
	footer.innerHTML = '<h6 class="m-0">© 2021 Your Fashion</h6>';
	document.body.appendChild(footer);
}