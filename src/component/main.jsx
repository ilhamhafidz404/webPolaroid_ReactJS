import React, { Component } from 'react';

class main extends Component {
    render() {
        return (
            <main>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row product">
                            <div className="text col-lg-6 d-flex align-items-center">
                                <div className="desk">
                                    <h3>Polaroid</h3>
                                    <p>Potrait atau Landscape dengan minimal 50 photo dan bisa custom warna backgound bisa polos maupun bergambar</p>
                                    <span><i class="fas fa-dollar-sign"></i> : 50.000</span>
                                    <a href="#" class="cta">
                                    <span>Selengkapnya</span>
                                    </a>
                                </div>
                            </div>
                            <div className="img col-lg-6" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1453000109878-d4619d01587c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80")` }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row product">
                            <div className="text col-lg-6 d-flex align-items-center">
                                <div className="desk">
                                    <h3 className="light">Printing</h3>
                                    <p>Skripsi, Makalah, Laporan  ataupun lainnya. Bisa nih di Print di sini. Mau hitam putih atau berwarna, Bebas!!</p>
                                    <span><i class="fas fa-dollar-sign"></i> : 50.000</span>
                                    <a href="#" class="cta light">
                                    <span>Selengkapnya</span>
                                    </a>
                                </div>
                            </div>
                            <div className="img col-lg-6"style={{ backgroundImage: `url("https://images.unsplash.com/photo-1551781069-73a1da89e333?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")` }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row product">
                            <div className="img col-lg-6 p" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1589985644776-94b8df5cfedc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80")` }}>
                            </div>
                            <div className="text col-lg-6 d-flex align-items-center">
                            <div className="desk">
                                    <h3 className="dark">Brosur/Pamplate</h3>
                                    <p>Bikin pamflet menarik, moder, lucu, cantik untuk keperluan organisai</p>
                                    <span><i class="fas fa-dollar-sign"></i> : 50.000</span>
                                    {/* <button class="button type3">
                                        Selengkapnya
                                    </button> */}
                                    <a href="#" class="cta dark">
                                    <span>Selengkapnya</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row product">
                            <div className="img col-lg-6" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1578289367009-faa2c72ba3db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")` }}>
                            </div>
                            <div className="text col-lg-6 d-flex align-items-center">
                            <div className="desk">
                                    <h3 className="green">Sticker</h3>
                                    <p>Bikin dan custom sticker dengan wajah sendiri? Yuk custom sticker mu di sini</p>
                                    <span><i class="fas fa-dollar-sign"></i> : 50.000</span>
                                    <a href="#" class="cta red">
                                    <span>Selengkapnya</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default main;