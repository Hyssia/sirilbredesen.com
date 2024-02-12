import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCZKaU-4EEPpaIqZI_2Ez7NHdzanaHmdno',
  authDomain: 'gallery-bb17b.firebaseapp.com',
  projectId: 'gallery-bb17b',
  storageBucket: 'gallery-bb17b.appspot.com',
  messagingSenderId: '569940950449',
  appId: '1:569940950449:web:54cedd71781fc39071d190',
  measurementId: 'G-XBCFR04V7W',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage, analytics, app };
