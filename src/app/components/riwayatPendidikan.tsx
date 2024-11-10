function RowRiwayat(props:any) {
    return (
      <div className="border border-[hsl(45,100%,97%)] rounded-lg bg-[hsl(50,100%,90%)] dark:bg-[hsl(25,35%,25%)] shadow hover:bg-[hsl(30,100%,85%)] dark:hover:bg-[hsl(20,50%,35%)] transition my-3">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 text-md mb-3 text-center text-balck-800">
            <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
            <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
            <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
  }
  
export default function RiwayatPendidikan() {
return (
  <section className="riwayatpendidikan bg-white dark:bg-gray-200 py-8">
  <div className="container mx-auto p-4 text-center pt-10">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Riwayat Pendidikan</h2> 
    <RowRiwayat jenjang="SD" sekolah="SDN Cijagra 2" tahun="2009-2015" />
    <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Paseh" tahun="2015-2018" />
    <RowRiwayat jenjang="SMK" sekolah="SMK Aloer Wargakusumah" tahun="2018-2021" />
    <RowRiwayat jenjang="D3 Komputerisasi Akuntansi" sekolah="Ma'soem University" tahun="2022-sekarang" />
  </div>
  </section>
  );
}