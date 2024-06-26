import {
  Home,
  Login,
  Register,
  Dashboard,
  ListAkun,
  RekamMedis,
  RiwayatPasien,
  AkunSaya,
  AntrianMedis,
  EditAkun,
  TambahRekamMedis,
  EditRekamMedis,
  NotFound,
} from "./pages";
import { BrowserRouter, Routes, Route, createHashRouter, RouterProvider } from "react-router-dom";
import {
  ProtectedRoutes,
  ProtectedRoutesAdminDokter,
  ProtectedRoutesAdmin,
  PublicRoute,
} from "./routes/PrivateRoutes";


const routes = [
  // Rute indeks
  { path: "/", element: <Home /> },

  // Rute publik
  { 
    element: <PublicRoute />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> }
    ]
  },

  // Rute yang memerlukan autentikasi
  { 
    element: <ProtectedRoutes />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/rekam-medis/:id_user", element: <RekamMedis /> },
      { path: "/akun-saya", element: <AkunSaya /> }
    ]
  },

  // Rute admin
  { 
    element: <ProtectedRoutesAdmin />,
    children: [
      { path: "/list-akun", element: <ListAkun /> },
      { path: "/list-akun/edit/:id_user", element: <EditAkun /> }
    ]
  },

  // Rute admin dokter
  { 
    element: <ProtectedRoutesAdminDokter />,
    children: [
      { path: "/riwayat-pasien", element: <RiwayatPasien /> },
      { path: "/rekam-medis/tambah/:nama/:id_user", element: <TambahRekamMedis /> },
      { path: "/rekam-medis/edit/:nama/:id_rekam_medis/:id_user", element: <EditRekamMedis /> },
      { path: "/antrian-medis", element: <AntrianMedis /> }
    ]
  },

  // Rute untuk menangani rute yang tidak ditemukan (404)
  { path: "*", element: <NotFound /> }
];

const router = createHashRouter(routes)


function App() {

  return <RouterProvider router={router} />

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route index element={<Home />} />
  //       <Route path="/" element={<Home />} />

  //       <Route element={<PublicRoute />}>
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Register />} />
  //       </Route>

  //       <Route element={<ProtectedRoutes />}>
  //         <Route path="/dashboard" element={<Dashboard />} />
  //         <Route path="/rekam-medis/:id_user" element={<RekamMedis />} />
  //         <Route path="/akun-saya" element={<AkunSaya />} />
  //       </Route>

  //       <Route element={<ProtectedRoutesAdmin />}>
  //         <Route path="/list-akun" element={<ListAkun />} />
  //         <Route path="/list-akun/edit/:id_user" element={<EditAkun />} />
  //       </Route>

  //       <Route element={<ProtectedRoutesAdminDokter />}>
  //         <Route path="/riwayat-pasien" element={<RiwayatPasien />} />
  //         <Route
  //           path="/rekam-medis/tambah/:nama/:id_user"
  //           element={<TambahRekamMedis />}
  //         />
  //         <Route
  //           path="/rekam-medis/edit/:nama/:id_rekam_medis/:id_user"
  //           element={<EditRekamMedis />}
  //         />
  //         <Route path="/antrian-medis" element={<AntrianMedis />} />
  //       </Route>

  //       <Route path="*" element={<NotFound />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
