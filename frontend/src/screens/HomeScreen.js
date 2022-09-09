import data from '../data.js';

const ProductComponent = (product) => {
  return `
    <div class="col mb-3">
      <div class="card h-100">
        <div class="card-header">
          <div class="image-container">
          <a href="#/product/${product._id}">
            <img src="./assets/images/${product.image}" class="" alt="...">
          </a>
          </div>
        </div>
        <div class="card-body">
          <a href="#/product/${product._id}">
            <h3 class="card-title fw-bold d-inline">${product.name}</h3>
          </a>
          
          <div class="d-flex justify-content-between align-items-center">
            <span>Price :</span>
            <span><small class="text-decoration-line-through">$ ${product.price}</small> <b class="fs-2">$ ${product.price}</b></span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <span>Category :</span>
            <span><a href="#">${product.category}</a></span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <span>Available :</span>
            <span>In Stock</span>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <span>Review :</span>
            <span>${product.numReviews}</span>
          </div>

          <small class="text-info">Rating Star</small>
        </div>
        <div class="card-footer">
          <div class="d-grid gap-2">
            <button class="btn btn-secondary" type="button">Add to Favoutites</button>
            <button class="btn btn-primary" type="button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  `;
};

const PaginationComponent = () => {
  return `
    <nav class="row" aria-label="Page navigation example">
      <ul class="pagination p-2 justify-content-center">
        <li class="page-item"><a class="page-link" href="#">
            Previous</a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  `;
};

const HomeScreen = {
  render: () => {
    const { products } = data;
    return `
      <div class="container-fluid">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-4">
          ${products.map((product) => ProductComponent(product)).join('\n')}
        </div>
        <div>
          ${PaginationComponent()}
        </div>

      </div>
    `;
  },
};

export default HomeScreen;
