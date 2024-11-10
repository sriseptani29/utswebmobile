function RowPekerjaan(props: any) {
  return (
    <div className="border border-[hsl(45,100%,97%)] rounded-lg bg-[hsl(50,100%,90%)] dark:bg-[hsl(25,35%,25%)] shadow hover:bg-[hsl(30,100%,85%)] dark:hover:bg-[hsl(20,50%,35%)] transition my-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1 text-md mb-3 text-center text-gray-800 dark:text-gray-200">
          <div className="col-span-12 md:col-span-4 font-semibold">{props.sebagai}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4 text-black-600 dark:text-gray-400">{props.tahun}</div>
        </div>
      </div>
    </div>
  );
}

export default function RiwayatPekerjaan() {
  return (
    <section className="riwayatpekerjaan bg-white dark:bg-gray-200 py-8">
      <div className="container mx-auto p-4 text-center pt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Riwayat Pekerjaan</h2>  
        <RowPekerjaan sebagai="Guru SMK" instansi="SMK Garuda" tahun="1999" />
        <RowPekerjaan sebagai="Staff IT" instansi="Dinas Sosial" tahun="2002" />
        <RowPekerjaan sebagai="Programmer" instansi="CV GMedia" tahun="2005" />
        <RowPekerjaan sebagai="Dosen" instansi="Universitas Ma'soem" tahun="2008" />
      </div>
    </section>
  );
}
