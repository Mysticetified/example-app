import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Import QR-code scanning utility
import { Html5QrcodeScanner } from "html5-qrcode";
import { Html5Qrcode } from 'html5-qrcode';