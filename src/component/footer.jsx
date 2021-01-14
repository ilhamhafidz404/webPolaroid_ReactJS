import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col-lg-4 left">
                        <h4 className="logo">Galuh Pringgandani</h4>
                        <p>Usaha Digital Printing yang menerima Jasa Printing, Polaroid, Pembuatan Sticker, buku Yaasin, Pembuatan Brosur/pamflet dan Undangan.</p>
                        <div className="sosmed">
                            <a href="" data-bs-toggle="tooltip" id="myTooltip" data-bs-placement="top" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="" data-bs-toggle="tooltip" id="myTooltip" data-bs-placement="top" title="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="" data-bs-toggle="tooltip" id="myTooltip" data-bs-placement="top" title="Youtube"><i class="fab fa-youtube"></i></a>
                            <a href="" data-bs-toggle="tooltip" id="myTooltip" data-bs-placement="top" title="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="" data-bs-toggle="tooltip" id="myTooltip" data-bs-placement="top" title="Gmail"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 mid">
                        <h4>Waktu Jam Kerja</h4>
                        <hr/>
                        <p>kami terbuka untuk pemesanan, pertanyaan dan saran dari via email dan Whasapp Anda dalam:</p>
                        <ul>
                            <li><span>Senin-Jumat</span> : 6.00 - 15.00</li>
                            <li><span>Sabtu-Minggu</span> : 12.00 - 20.00</li>
                        </ul>
                    </div>
                    <div className="col-lg-5 right">
                        <h4>Lokasi Galuh Printing</h4>
                        <hr/>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31688.786402090263!2d108.58219785030121!3d-6.878825624976784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1abca9d1e94f%3A0x40088f3bbf8fd4fe!2sSedong%20Kidul%2C%20Sedong%2C%20Cirebon%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1610510517679!5m2!1sid!2sid"></iframe>
                    </div>
                </div>
                <div className="footer">
                    <p className="text-center">&copy;Copyright and Make Website by Ilham Hafidz & Galuh Priggandani</p>
                </div>
            </footer>
        );
    }
}

export default footer;