import React, { Component } from 'react'

class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="container-fluid container">
                    <a className="navbar-brand" href="#">Galuh Pringgandani</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* Dropdown<i class="fas fa-sort-down"></i> */}
                                    Menu
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="Link/product.jsx">Polaroid</a></li>
                                    <li><a class="dropdown-item" href="#">Design Kalender</a></li>
                                    <li><a class="dropdown-item" href="#">Kartu Ucapan</a></li>
                                    <li><a class="dropdown-item" href="#">Undangan</a></li>
                                    <li><a class="dropdown-item" href="#">Printing</a></li>
                                    <li><a class="dropdown-item" href="#">Buku Yaasin</a></li>
                                    <li><a class="dropdown-item" href="#">Garskin</a></li>
                                    <li><a class="dropdown-item" href="#">Cetak Foto</a></li>
                                    <li><a class="dropdown-item" href="#">Fotocopy</a></li>
                                    <li><a class="dropdown-item" href="#">Custom IDCard</a></li>
                                    <li><a class="dropdown-item" href="#">Design Poster</a></li>
                                </ul>
                            </li>
                            <a class="nav-link" href="#">Contact</a>
                            <a class="nav-link" href="#">About</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default navbar
