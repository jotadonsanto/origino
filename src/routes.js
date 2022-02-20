import Activos from './pages/activos/Activos';
import ActivosCarga from './pages/activos/ActivosCarga';
import ArchivoCarga from './pages/archivos/ArchivoCarga';
import ArchivoCargaManual from './pages/archivos/ArchivoCargaManual';
import ArchivoVerificacion from './pages/archivos/ArchivoVerificacion';
import TransferenciaABox from './pages/transferencia/TransferenciaABox';
import Transferencia from './pages/transferencia/Transferencia';
import Crear from './pages/signin/cuenta/Crear';
import DatosPersonales from './pages/signin/cuenta/DatosPersonales';
import Localizacion from './pages/signin/cuenta/Localizacion';
import Activada from './pages/signin/cuenta/Activada';
import EmailEnviado from './pages/signin/EmailEnviado';
import Cadenas from './pages/signin/empresa/Cadenas';
import EstablecimientoTipos from './pages/signin/establecimiento/EstablecimientoTipos';
import EstablecimientoDatos from './pages/signin/establecimiento/EstablecimientoDatos';
import EstablecimientoImagenes from './pages/signin/establecimiento/EstablecimientoImagenes';
import SubEstablecimiento from './pages/establecimiento/SubEstablecimiento.jsx';

const MainRoutes = [
  {
    exact: true,
    path: '/',
    component: Activos,
  },
  {
    exact: true,
    path: '/activos/carga',
    component: ActivosCarga,
  },
  {
    exact: true,
    path: '/archivo/carga',
    component: ArchivoCarga,
  },
  {
    exact: true,
    path: '/archivo/carga_manual',
    component: ArchivoCargaManual,
  },
  {
    exact: true,
    path: '/archivo/verificacion',
    component: ArchivoVerificacion,
  },
  {
    exact: true,
    path: '/transferencia/box',
    component: TransferenciaABox,
  },
  {
    exact: true,
    path: '/transferencia',
    component: Transferencia,
  },
  {
    exact: true,
    path: '/establecimientos/subestablecimiento',
    component: SubEstablecimiento,
  },
];

const SignInRoutes = [
  {
    exact: true,
    path: '/signin/cuenta/crear',
    component: Crear,
  },
  {
    exact: true,
    path: '/signin/cuenta/datos_personales',
    component: DatosPersonales,
  },
  {
    exact: true,
    path: '/signin/cuenta/localizacion',
    component: Localizacion,
  },
  {
    exact: true,
    path: '/signin/cuenta/activada',
    component: Activada,
  },
  {
    exact: true,
    path: '/signin/email_enviado',
    component: EmailEnviado,
  },
  {
    exact: true,
    path: '/signin/empresa/cadenas',
    component: Cadenas,
  },
  {
    exact: true,
    path: '/signin/establecimiento/registro/tipos',
    component: EstablecimientoTipos,
  },
  {
    exact: true,
    path: '/signin/establecimiento/registro/datos',
    component: EstablecimientoDatos,
  },
  {
    exact: true,
    path: '/signin/establecimiento/registro/imagenes',
    component: EstablecimientoImagenes,
  },
];

export { MainRoutes, SignInRoutes };