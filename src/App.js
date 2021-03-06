import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GradeIcon from "@material-ui/icons/Grade";

function App() {
  return (
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div class="col mb-5">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />

              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Fancy Product</h5>
                  $40.00 - $80.00
                </div>
              </div>

              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">
                    View options
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute top-0 end-0">
                Sale
              </div>

              <img
                class="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />

              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Special Item</h5>
                  ⭐⭐⭐⭐⭐
                  <br></br>
                  <span class="text-muted text-decoration-line-through">
                    $20.00
                  </span>
                  $18.00
                </div>
              </div>

              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />

              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Fancy Product</h5>
                  $40.00 - $80.00
                </div>
              </div>

              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">
                    View options
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute top-0 end-0">
                Sale
              </div>

              <img
                class="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />

              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Special Item</h5>
                  <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  ⭐⭐⭐⭐⭐
                  <br></br>
                  <span class="text-muted text-decoration-line-through"></span>
                  $40.00
                </div>
              </div>

              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />

              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Sales Item</h5>
                  $40.00 - $80.00
                </div>
              </div>

              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">
                    View options
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute top-0 end-0">
                Sale
              </div>

              <img
                class="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />

              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Fancy Product</h5>
                  <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  <span class="text-muted text-decoration-line-through">
                    $20.00
                  </span>
                  $18.00
                </div>
              </div>

              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <img
                class="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />

              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Special Item</h5>
                  ⭐⭐⭐⭐⭐
                  <br></br>
                  $40.00 - $80.00
                </div>
              </div>

              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">
                    View options
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100">
              <div class="badge bg-dark text-white position-absolute top-0 end-0">
                Sale
              </div>

              <img
                class="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />

              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">Popular Item</h5>
                  <div class="d-flex justify-content-center small text-warning mb-2">
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                  </div>
                  <span class="text-muted text-decoration-line-through">
                    $20.00
                  </span>
                  $18.00
                </div>
              </div>

              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
