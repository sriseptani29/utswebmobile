function RowRiwayat(props:any) {
    return (
      <div className="border-1 rounded-lg bg-yellow-100 p-2 my-5">
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
  <div className="container mx-auto p-2 text-center pt-20">
    <h2 className="text-xl font-bold mb-4 text-center text-black-600">Riwayat Pendidikan</h2>
  
    <RowRiwayat jenjang="SD" sekolah="SDN Cijagra 2" tahun="2009-2015" />
    <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Paseh" tahun="2015-2018" />
    <RowRiwayat jenjang="SMK" sekolah="SMK Aloer Wargakusumah" tahun="2018-2021" />
    <RowRiwayat jenjang="D3 Komputerisasi Akuntansi" sekolah="Ma'soem University" tahun="2022-sekarang" />
  </div>
  );
}