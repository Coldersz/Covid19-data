<template>
  <div class="w-11/12 mx-auto py-16">
    <!-- <div class="border m-6 rounded-lg bg-white mx-auto max-w-sm shadow-lg overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        <img
          class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
          src="https://api.adorable.io/avatars/193/abott@adorable.png"
          alt
        />
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <div class="hover:uppercase">
              <p class="text-xl leading-tight">Jane Doe</p>
            </div>
            <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
          </div>
          <div class="flex flex-wrap">
            <button
              class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125 hover:skew-y-12"
            >Call</button>
            <button
              class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125 hover:-skew-y-12"
            >Message</button>
          </div>
        </div>
      </div>
    </div> -->
    <div id="article">
      <div class="pt-10 pb-20">
        <h1 class="text-4xl font-bold lg:mt-32">Apa itu corona?</h1>
        <div v-show="!definition">
          <p class="lead text-xl pt-1">
            Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan. Penyakit karena infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan...
          </p>
          <center>
          <div class="pt-8 pb-16 w-full">
            <button class="rounded-full mx-auto bg-purple-600 hover:bg-purple-500 py-2 px-4 text-white" @click="definition = !definition">Baca lebih lanjut</button>
          </div>
          </center>
        </div>
        <div v-show="definition">
          <p class="lead text-xl pt-1">
            Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan. Penyakit karena infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan gangguan ringan pada sistem pernapasan, infeksi paru-paru yang berat, hingga kematian.
          </p>
          <p class="lead text-xl pt-4">
            Severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) yang lebih dikenal dengan nama virus Corona adalah jenis baru dari coronavirus yang menular ke manusia. Virus ini bisa menyerang siapa saja, seperti lansia (golongan usia lanjut), orang dewasa, anak-anak, dan bayi, termasuk ibu hamil dan ibu menyusui.
          </p>
          <p class="lead text-xl pt-4">
            Infeksi virus Corona disebut COVID-19 (Corona Virus Disease 2019) dan pertama kali ditemukan di kota Wuhan, China pada akhir Desember 2019. Virus ini menular dengan sangat cepat dan telah menyebar ke hampir semua negara, termasuk Indonesia, hanya dalam waktu beberapa bulan.
          </p>
          <center>
          <div class="pt-8 pb-12 w-full">
            <button class="py-2 px-4 rounded-full mx-auto bg-transparent border border-purple-500 text-purple-500 transition-all transform duration-200 hover:bg-purple-500 hover:text-white" @click="definition = !definition">Baca lebih sedikit</button>
          </div>
          </center>
        </div>
      </div>

      <div class="w-full lg:grid lg:grid-cols-2 lg:gap-10 py-10">
        <div class="lg:hidden block">
          <img src="@/assets/familia-protect.jpg" alt="protect" class="rounded-lg">
        </div>
        <div>
          <h1 class="text-4xl font-bold">Penyebab tertular virus corona</h1>
          <div v-show="!cause">
            <p class="lead text-xl pt-1">
            Seseorang dapat tertular COVID-19 melalui berbagai cara, yaitu:
            <br>
              <ul class="list-disc pl-5">
                <li>
                  Tidak sengaja menghirup percikan ludah (droplet) yang keluar saat penderita COVID-19 batuk atau bersin
                </li>
                <li>
                  Memegang...
                </li>
              </ul>
            </p>
            <center>
            <div class="pt-8 pb-12 w-full">
              <button class="rounded-full mx-auto bg-purple-600 hover:bg-purple-500 py-2 px-4 text-white" @click="cause = !cause">Baca lebih lanjut</button>
            </div>
            </center>
          </div>
          <div v-show="cause">
            <p class="lead text-xl pt-1">
              Seseorang dapat tertular COVID-19 melalui berbagai cara, yaitu:
              <br>
              <ul class="list-disc pl-5">
                <li>
                  Tidak sengaja menghirup percikan ludah (droplet) yang keluar saat penderita COVID-19 batuk atau bersin
                </li>
                <li>
                  Memegang mulut atau hidung tanpa mencuci tangan terlebih dulu setelah menyentuh benda yang terkena cipratan ludah penderita COVID-19
                </li>
                <li>
                  Kontak jarak dekat dengan penderita COVID-19
                </li>
              </ul>
            </p>
            <p class="lead text-xl pt-4">
              Virus Corona dapat menginfeksi siapa saja, tetapi efeknya akan lebih berbahaya atau bahkan fatal bila terjadi pada orang lanjut usia, ibu hamil, orang yang memiliki penyakit tertentu, perokok, atau orang yang daya tahan tubuhnya lemah, misalnya pada penderita kanker.
            </p>
            <p class="lead text-xl pt-4">
              Karena mudah menular, virus Corona juga berisiko tinggi menginfeksi para tenaga medis yang merawat pasien COVID-19. Oleh karena itu, para tenaga medis dan orang-orang yang memiliki kontak dengan pasien COVID-19 perlu menggunakan alat pelindung diri (APD).
            </p>
            <center>
            <div class="pt-8 pb-12 w-full">
              <button class="py-2 px-4 rounded-full mx-auto bg-transparent border border-purple-500 text-purple-500 transition-all transform duration-200 hover:bg-purple-500 hover:text-white" @click="cause = !cause">Baca lebih sedikit</button>
            </div>
            </center>
          </div>
        </div>
        <div class="hidden lg:block">
          <img src="@/assets/familia-protect.jpg" alt="protect" class="rounded-lg">
        </div>
      </div>

      <div class="w-full lg:grid lg:grid-cols-2 lg:gap-10 py-10">
        <!-- <center> -->
        <div class="block">
          <img src="@/assets/cold.jpg" alt="cold" class="rounded-lg md:mx-auto lg:ml-0 md:h-120 lg:h-auto">
        </div>
        <!-- </center> -->
        <div v-show="!symptoms">
          <h1 class="text-4xl font-bold">Gejala virus corona</h1>
          <p class="lead text-xl pt-1">
            Secara umum, ada 3 gejala umum yang bisa menandakan seseorang terinfeksi virus Corona, yaitu:
            <br>
            <ul class="list-disc pl-5">
              <li>
                Demam (suhu tubuh di atas 38 derajat Celsius)
              </li>
              <li>
                Batuk kering
              </li>
              <li>
                Sesak nafas...
              </li>
            </ul>
          </p>
          <center>
          <div class="pt-8 pb-12 w-full">
            <button class="rounded-full mx-auto bg-purple-600 hover:bg-purple-500 py-2 px-4 text-white" @click="symptoms = !symptoms">Baca lebih lanjut</button>
          </div>
          </center>
        </div>
        <div v-show="symptoms">
          <h1 class="text-4xl font-bold">Gejala virus corona</h1>
          <p class="lead text-xl pt-1">
            Secara umum, ada 3 gejala umum yang bisa menandakan seseorang terinfeksi virus Corona, yaitu:
            <br>
            <ul class="list-disc pl-5">
              <li>
                Demam (suhu tubuh di atas 38 derajat Celsius)
              </li>
              <li>
                Batuk kering
              </li>
              <li>
                Sesak nafas
              </li>
            </ul>
          </p>
          <p class="lead text-xl pt-4">
            Ada beberapa gejala lain yang juga bisa muncul pada infeksi virus Corona meskipun lebih jarang, yaitu:
            <br>
            <ul class="list-disc pl-5">
              <li>
                Diare
              </li>
              <li>
                Sakit kepala
              </li>
              <li>
                Konjungtivitis
              </li>
              <li>
                Hilangnya kemampuan mengecap rasa atau mencium bau
              </li>
              <li>
                Ruam di kulit
              </li>
            </ul>
          </p>
          <p class="lead text-xl pt-4">
            Gejala-gejala COVID-19 ini umumnya muncul dalam waktu 2 hari sampai 2 minggu setelah penderita terpapar virus Corona.
          </p>
          <center>
          <div class="pt-8 pb-12 w-full">
            <button class="py-2 px-4 rounded-full mx-auto bg-transparent border border-purple-500 text-purple-500 transition-all transform duration-200 hover:bg-purple-500 hover:text-white" @click="symptoms = !symptoms">Baca lebih sedikit</button>
          </div>
          </center>
        </div>
      </div>

      <div v-show="!prevention">
        <h1 class="text-4xl font-bold pt-5">Cara mencegah terinfeksi corona</h1>
        <p class="lead text-xl pt-1">
          Untuk melindungi diri sekaligus menahan penyebaran virus corona, Anda dapat melakukan hal-hal berikut, yaitu:
          <br>
          <ul class="list-disc pl-5">
            <li>
              Cuci tangan dengan sabun dan air mengalir selama 20 detik. Jika tidak bisa mencuci tangan, bersihkan tangan menggunakan hand sanitizer
            </li>
            <li>
              Hindari menyentuh area...
            </li>
          </ul>
        </p>
        <center>
          <div class="pt-8 pb-12 w-full">
            <button class="rounded-full mx-auto bg-purple-600 hover:bg-purple-500 py-2 px-4 text-white" @click="prevention = !prevention">Baca lebih lanjut</button>
          </div>
        </center>
      </div>
      <div v-show="prevention">
        <h1 class="text-4xl font-bold pt-5">Cara mencegah terinfeksi corona</h1>
        <p class="lead text-xl pt-1">
          Untuk melindungi diri sekaligus menahan penyebaran virus corona, Anda dapat melakukan hal-hal berikut, yaitu:
          <br>
          <ul class="list-disc pl-5">
            <li>
              Cuci tangan dengan sabun dan air mengalir selama 20 detik. Jika tidak bisa mencuci tangan, bersihkan tangan menggunakan hand sanitizer
            </li>
            <li>
              Hindari menyentuh area wajah, seperti mata, hidung, dan mulut sebelum Anda membersihkan tangan
            </li>
            <li>
              Jangan keluar rumah jika Anda merasa kurang sehat atau memiliki gejala flu
            </li>
            <li>
              Hindari atau batasi kontak fisik dengan orang lain. Jika memungkinkan, usahakan berada pada jarak setidaknya satu meter dengan orang lain
            </li>
            <li>
              Tutup mulut dan hidung Anda dengan tisu atau siku bagian dalam ketika batuk atau bersin. Jika Anda menggunakan tisu, segera buang tisu Anda
            </li>
            <li>
              Bersihkan barang-barang yang sering Anda gunakan dengan disinfektan, seperti gawai atau handphone, laptop, meja, dan lainnya
            </li>
            <li>
              Terapkan gaya hidup sehat, mulai dari pola makan, olahraga, serta hindari begadang untuk menjaga kekebalan tubuh Anda
            </li>
          </ul>
        </p>
        <center>
          <div class="pt-8 pb-12 w-full">
            <button class="py-2 px-4 rounded-full mx-auto bg-transparent border border-purple-500 text-purple-500 transition-all transform duration-200 hover:bg-purple-500 hover:text-white" @click="prevention = !prevention">Baca lebih sedikit</button>
          </div>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      definition: false,
      cause: false,
      symptoms: false,
      prevention: false
    }
  }
};
</script>
