// import express
import  express  from "express";

// init express router
const router = express.Router();

router.get('/biodata/:nama/:tempat/:tanggal/:jk/:agama/:alamat/:telepon/:email/:hobi/:cita_cita', (req, res) =>{
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;
    var tanggal_lahir = req.params.tanggal;
    var jk = req.params.jk;
    var agama = req.params.agama;
    var alamat = req.params.alamat;
    var telepon = req.params.telepon;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita_cita; 
    res.send(
        'Nama : ' + nama + '<br>' +
        'Tempat Lahir : '+ tempat_lahir + '<br>' +
        'Tanggal Lahir : ' + tanggal_lahir + '<br>' +
        'Jenis Kelamin : ' + jk + '<br>' +
        'Agama : ' + agama + '<br>' +
        'Alamat : ' + alamat + ' <br>' +
        'Telepon : ' + telepon + ' <br>' +
        'Email : ' + email + ' <br>' +
        'Hobi : ' + hobi + ' <br>' +
        'Cita-cita : ' + cita_cita);
});
router.get('/aritmatika', (req, res) =>{
    var bilangan1 = 10;
    var bilangan2 = 5;
    var bilangan3 = 20;
    var bilangan4 = 4;
    var bilangan5 = 30;
    var bilangan6 = 3;
    var bilangan7 = 40;
    var bilangan8 = 2;
    var tambah = bilangan1 + bilangan2;
    var kurang = bilangan3 - bilangan4;
    var bagi = bilangan5 / bilangan6;
    var kali = bilangan7 * bilangan8;
    res.send(
        '<h3>Penjumlahan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah + '<hr></hr><br>' +

        '<h3>Pengurangan</h3>' +
        'Bilangan ke 1 : ' + bilangan3 + '<br>' +
        'Bilangan ke 2 : ' + bilangan4 + '<br>' +
        'Hasil : ' + kurang + '<hr></hr><br>' +

        '<h3>Pembagian</h3>' +
        'Bilangan ke 1 : ' + bilangan5 + '<br>' +
        'Bilangan ke 2 : ' + bilangan6 + '<br>' +
        'Hasil : ' + bagi + '<hr></hr><br>' +

        '<h3>Perkalian</h3>' +
        'Bilangan ke 1 : ' + bilangan7 + '<br>' +
        'Bilangan ke 2 : ' + bilangan8 + '<br>' +
        'Hasil : ' + kali + '<hr></hr><br>' 
    );
});
router.get('/bangun_datar', (req, res) =>{
    var sisi = 6;
    var panjang = 12;
    var lebar = 30;
    var alas = 20;
    var tinggi = 40;
    var jari_jari = 22;
    var persegi = sisi * sisi;
    var persegi_panjang = panjang * lebar;
    var segitiga = 1/2 * alas * tinggi;
    var lingkaran = 2 * 3.14 * jari_jari;
    res.send(
        '<h1>Rumus Bangun Datar</h1><br>' +
        '<h3>Rumus Persegi</h3>' +
        'Nilai sisi : ' + sisi + '<br>' +
        'Rumus Persegi : sisi x sisi' + '<br>' +
        'Hasil : ' + persegi + '<hr></hr><br>' +

        '<h3>Rumus Persegi Panjang</h3>' +
        'Nilai Panjang : ' + panjang + '<br>' +
        'Nilai Lebar : ' + lebar + '<br>' +
        'Rumus Luas Persegi Panjang : Panjang x Lebar' + '<br>' +
        'Hasil : ' + persegi_panjang + '<hr></hr><br>' +

        '<h3>Rumus segitiga</h3>' +
        'Nilai Alas : ' + alas + '<br>' +
        'Nilai Tinggi : ' + tinggi + '<br>' +
        'Rumus Segitiga : 1/2 x Alas x Tinggi' + '<br>' +
        'Hasil : ' + segitiga + '<hr></hr><br>' +

        '<h3>Rumus Lingkaran</h3>' +
        'Nilai π  : ' + 3.14 + '<br>' +
        'Nilai Jari-jari : ' + jari_jari + '<br>' +
        'Rumus Lingkaran : 2 x π x jari-jari' + '<br>' +
        'Hasil : ' + lingkaran + '<hr></hr><br>'
        );
});
router.get('/tes/:nama/:kelas/:pts/:pas', (req, res)=> {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);
    var rapot = (pts + pas) / 2;

    if (rapot >= 90 && rapot <=100) {
        var grade = "Grade A";
    } else if (rapot >= 80) {
        var grade = "Grade B";
    } else if (rapot >= 70) {
        var grade = "Grade C";
    } else if (rapot >= 60) {
        var grade = "Grade D";
    } else if (rapot >= 50) {
        var grade = "Grade E";
    } else if (rapot >= 0) {
        var grade = "Sing Getol Diajar";
    } else {
        var grade = "Nilai Tidak Valid";
    }
    res.send(
        'Nama : ' + nama + '<br>' +
        'Kelas : ' + kelas + '<br>' +
        'Nilai PTS : ' + pts + '<br>' +
        'Nilai PAS : ' + pas + '<br>' +
        'Nilai Rapot : ' + rapot + '<br>' +
        'Keterangan : ' + grade + '<br>'
    );
});
router.get('/bersarang/:nama/:jurusan/:kelas/:keterangan', (req, res) =>{
    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;
    var keterangan = req.params.keterangan;

    if (jurusan == 'RPL') {
        if (kelas == '10 RPL') {
            var ket = "Anda Kelas 10 RPL";
            if (keterangan == '10 RPL 1') {
                var ruangan = "Anda 10 RPL 1";
            } else if (keterangan == '10 RPL 2') {
                var ruangan = "Anda 10 RPL 2";
            } else if (keterangan == '10 RPL 3') {
                var ruangan = "Anda 10 RPL 3";
            } else {
                var ruangan = "Anda Tidak Punya Ruangan";
            }
        } else if (kelas == '11 RPL') {
            var ket = "Anda Kelas 11 RPL";
            if (keterangan == '11 RPL 1') {
                var ruangan = "Anda 11 RPL 1";
            } else if (keterangan == '11 RPL 2') {
                var ruangan = "Anda 11 RPL 2";
            } else if (keterangan == '11 RPL 3') {
                var ruangan = "Anda 11 RPL 3";
            } else {
                var ruangan = "Anda Tidak Punya Ruangan";
            }
        } else if (kelas == '12 RPL') {
            var ket = "Anda Kelas 12 RPL";
            if (keterangan == '12 RPL 1') {
                var ruangan = "Anda 12 RPL 1";
            } else if (keterangan == '12 RPL 2') {
                var ruangan = "Anda 12 RPL 2";
            } else if (keterangan == '12 RPL 3') {
                var ruangan = "Anda 12 RPL 3";
            } else {
                var ruangan = "Anda Tidak Punya Ruangan";
            }
        } else {
            var ket = "Anda ALumni Cuyy";
        }
    } if (jurusan == 'TKRO') {
        if (kelas == '10 TKRO') {
            var ket = "Anda Kelas 10 TKRO";
        } else if (kelas == '11 TKRO') {
            var ket = "Anda Kelas 11 TKRO";
        } else if (kelas == '12 TKRO') {
            var ket = "Anda Kelas 12 TKRO";
        } else {
            var ket = "Anda ALumni Cuyy";
        }
        var Ket = "Anda Jurusan TKRO";
    } if (jurusan == 'TBSM') {
        if (kelas == '10 TBSM') {
            var ket = "Anda Kelas 10 TBSM";
        } else if (kelas == '11 TBSM') {
            var ket = "Anda Kelas 11 TBSM";
        } else if (kelas == '12 TBSM') {
            var ket = "Anda Kelas 12 TBSM";
        } else {
            var ket = "Anda Alumni Cuyy";
        }
    } else {
        var Ket = "Jurusan Tidak Tersedia";
    }
    res.send(
        'Nama : ' + nama + '<br>' +
        'Jurusan : ' + jurusan + '<br>' +
        'Kelas : ' + ket + '<br>' +
        'Keterangan : ' + ruangan + '<br>'
    );
});
router.get('/latihan/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req, res) =>{
    var nama = req.params.nama;
    var tanggal = req.params.tanggal;
    var jenis = req.params.jenis;
    var pesanan = req.params.pesanan;
    var jumlah = parseInt(req.params.jumlah);
    if (jenis == 'makanan') {
        if (pesanan == "nasi goreng") {
            var harga = 20000;
        } else if (pesanan == "mie goreng") {
            var harga = 30000;
        } else if (pesanan == "ayam goreng") {
            var harga = 40000;
        } else {
            var harga = "Tidak Ada Harga";
        }
    } else if (jenis == 'minuman') {
        if (pesanan == "air mineral") {
            var harga = 10000;
        } else if (pesanan == "jus") {
            var harga = 20000;
        } else if (pesanan == "kopi") {
            var harga = 30000;
        } else {
            var harga = "Tidak Ada Harga";
        }
    } else {
        var jenis = "Anda Tidak Memilih Jenis";
    }
    var total = jumlah * harga;
        if (total >= 100000) {
            var diskon = total - (total * 0.5);
            var ket ='Anda Mendapatkan Diskon 50%';
        } else {
            var diskon = 0;
            var ket ='Anda Tidak Mendapatkan Diskon';
        }
        var total_pembayaran = total - diskon;
res.send(
    '<h1>Starbucks Lokal</h1><br>' +
    'Nama Pembeli : ' + nama + '<br>' +
    'Tanggal : ' + tanggal + '<br>' +
    'Jenis : ' + jenis + '<br>' +
    'Pesanan : ' + pesanan + '<br>' +
    'Harga : ' + harga + '<br>' +
    'Jumlah : ' + jumlah + '<br>' +
    '<br>' +
    '-----------------------------------------------------------<br>'+
    '<br>' +
    'Total : ' + total + '<br>' +
    'Diskon 50% : ' + diskon + '<br>' +
    'Keterangan : ' + ket + '<br>' +
    'Total Pembayaran : ' + total_pembayaran + '<br>' +
    '<br>' +
    '>>>>>>>>>>TERIMA KASIH<<<<<<<<<<<<<<br>'
);
});
router.get('/sample', (req, res) =>{
    res.send(
        '<h3>Selamat Datang</h3>'
    );
});

// export default router
export default router;