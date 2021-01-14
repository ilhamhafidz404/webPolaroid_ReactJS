import React, { Component } from 'react';

class owner extends Component {
    render() {
        return (
            <div className="owner">
                <div className="row">
                    <div className="col-lg-6 photo" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1598411435746-47bfecc3ea98?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80")` }}></div>
                    <div className="col-lg-6 text">
                        <div className="textIn p-4" >
                            <h4>Galuh Priggandani</h4>
                            <p>Merupakan owner atau pemilik usaha Galuh Printing. Ia lahir di Cirebon pada tanggal 28 Februari 2004. Galuh sekarang bersekolah di salah satu sekolah swasta di Kuningan yaitu SMK PERTIWI KUNINGAN mengambil Jurusan Rekayasa Perangkat Lunak. <br/> Ia memulai usaha Galuh Printing ini pada usia ?? tahun pada saat dirinya SMP. Memulai dengan menerima jasa Print dan sekarang banyak jasa yang dia tawarkan untuk konsumennya. Bahkan sekarang dia juga sudah bekerja sama dengan toko toko digital di sedaerah 3 Cirebon</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 visi p-4">
                                <h4>Visi</h4>
                                <hr/>
                                <p>Menjadi Percetakan yang dapat <span> memenuhi permintaan pelanggan</span> dengan produk yang <span>berkualitas</span> dan senantiasa meningkatkan <span>produktivitas</span>.</p>
                            </div>
                            <div className="col-md-6 misi p-4">
                                <h4>Misi</h4>
                                <hr/>
                                <ul>
                                    <li>Kepuasan Pelanggan</li>
                                    <li>Cetakan Berkualitas</li>
                                    <li>Mengikuti Perkembangan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default owner;