import { useState, useEffect } from 'react';
import smloneLogo from './assets/smlone_logo.png';
import imgApprentice from './assets/gambar/apprentice.png';
import imgJunior from './assets/gambar/junior.jpg';
import imgProfesional from './assets/gambar/profesional.png';
import imgYouth from './assets/gambar/youth.jpg';
import './App.css';

function App() {
  // Helper to get today's date formatted as YYYY-MM-DD
  const getTodayFormattedDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  // Form Pagination State
  const [step, setStep] = useState(() => Number(localStorage.getItem('smlone_step')) || 1);

  // ==================== PAGE 1 FIELDS (Participant details) ====================
  const [email, setEmail] = useState(() => localStorage.getItem('smlone_email') || '');
  const [fullName, setFullName] = useState(() => localStorage.getItem('smlone_fullName') || '');
  const [dob, setDob] = useState(() => localStorage.getItem('smlone_dob') || '');
  const [gender, setGender] = useState(() => localStorage.getItem('smlone_gender') || '');
  const [address, setAddress] = useState(() => localStorage.getItem('smlone_address') || '');
  const [contact, setContact] = useState(() => localStorage.getItem('smlone_contact') || '');
  const [programSelected, setProgramSelected] = useState(() => localStorage.getItem('smlone_programSelected') || '');
  const [branchSelected, setBranchSelected] = useState(() => localStorage.getItem('smlone_branchSelected') || '');
  const [hasPriorProgram, setHasPriorProgram] = useState(() => localStorage.getItem('smlone_hasPriorProgram') || '');
  const [priorPrograms, setPriorPrograms] = useState(() => {
    try {
      const saved = localStorage.getItem('smlone_priorPrograms');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [otherProgramText, setOtherProgramText] = useState(() => localStorage.getItem('smlone_otherProgramText') || '');
  const [todayDate, setTodayDate] = useState(() => localStorage.getItem('smlone_todayDate') || getTodayFormattedDate());
  const [consent, setConsent] = useState(() => localStorage.getItem('smlone_consent') === 'true');

  // ==================== PAGE 2 FIELDS (Parent & Education details) ====================
  const [subProgramSelected, setSubProgramSelected] = useState(() => localStorage.getItem('smlone_subProgramSelected') || '');
  const [schoolName, setSchoolName] = useState(() => localStorage.getItem('smlone_schoolName') || '');
  const [schoolGrade, setSchoolGrade] = useState(() => localStorage.getItem('smlone_schoolGrade') || '');
  const [parentEmail, setParentEmail] = useState(() => localStorage.getItem('smlone_parentEmail') || '');
  const [emergencyName, setEmergencyName] = useState(() => localStorage.getItem('smlone_emergencyName') || '');
  const [emergencyNumber, setEmergencyNumber] = useState(() => localStorage.getItem('smlone_emergencyNumber') || '');
  const [referralSource, setReferralSource] = useState(() => localStorage.getItem('smlone_referralSource') || '');
  const [referralOtherText, setReferralOtherText] = useState(() => localStorage.getItem('smlone_referralOtherText') || '');
  const [referralFriendName, setReferralFriendName] = useState(() => localStorage.getItem('smlone_referralFriendName') || '');
  const [instagramMama, setInstagramMama] = useState(() => localStorage.getItem('smlone_instagramMama') || '');
  const [instagramPapa, setInstagramPapa] = useState(() => localStorage.getItem('smlone_instagramPapa') || '');
  const [instagramAnak, setInstagramAnak] = useState(() => localStorage.getItem('smlone_instagramAnak') || '');

  // Form Status States
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(() => localStorage.getItem('smlone_isSubmitted') === 'true');
  const [submitError, setSubmitError] = useState('');

  // Custom Dropdown Open State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBranchDropdownOpen, setIsBranchDropdownOpen] = useState(false);

  // Helper to clear localStorage on submit/reset
  const clearLocalStorage = () => {
    const keys = [
      'smlone_step', 'smlone_email', 'smlone_fullName', 'smlone_dob', 'smlone_gender',
      'smlone_address', 'smlone_contact', 'smlone_programSelected', 'smlone_branchSelected', 'smlone_hasPriorProgram',
      'smlone_priorPrograms', 'smlone_otherProgramText', 'smlone_todayDate', 'smlone_consent',
      'smlone_subProgramSelected', 'smlone_schoolName', 'smlone_schoolGrade', 'smlone_parentEmail',
      'smlone_emergencyName', 'smlone_emergencyNumber', 'smlone_referralSource',
      'smlone_referralOtherText', 'smlone_referralFriendName', 'smlone_instagramMama',
      'smlone_instagramPapa', 'smlone_instagramAnak', 'smlone_isSubmitted'
    ];
    keys.forEach(key => localStorage.removeItem(key));
  };

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('smlone_step', step.toString());
    localStorage.setItem('smlone_email', email);
    localStorage.setItem('smlone_fullName', fullName);
    localStorage.setItem('smlone_dob', dob);
    localStorage.setItem('smlone_gender', gender);
    localStorage.setItem('smlone_address', address);
    localStorage.setItem('smlone_contact', contact);
    localStorage.setItem('smlone_programSelected', programSelected);
    localStorage.setItem('smlone_branchSelected', branchSelected);
    localStorage.setItem('smlone_hasPriorProgram', hasPriorProgram);
    localStorage.setItem('smlone_priorPrograms', JSON.stringify(priorPrograms));
    localStorage.setItem('smlone_otherProgramText', otherProgramText);
    localStorage.setItem('smlone_todayDate', todayDate);
    localStorage.setItem('smlone_consent', consent.toString());
    localStorage.setItem('smlone_subProgramSelected', subProgramSelected);
    localStorage.setItem('smlone_schoolName', schoolName);
    localStorage.setItem('smlone_schoolGrade', schoolGrade);
    localStorage.setItem('smlone_parentEmail', parentEmail);
    localStorage.setItem('smlone_emergencyName', emergencyName);
    localStorage.setItem('smlone_emergencyNumber', emergencyNumber);
    localStorage.setItem('smlone_referralSource', referralSource);
    localStorage.setItem('smlone_referralOtherText', referralOtherText);
    localStorage.setItem('smlone_referralFriendName', referralFriendName);
    localStorage.setItem('smlone_instagramMama', instagramMama);
    localStorage.setItem('smlone_instagramPapa', instagramPapa);
    localStorage.setItem('smlone_instagramAnak', instagramAnak);
    localStorage.setItem('smlone_isSubmitted', isSubmitted.toString());
  }, [
    step, email, fullName, dob, gender, address, contact, programSelected, branchSelected,
    hasPriorProgram, priorPrograms, otherProgramText, todayDate, consent,
    subProgramSelected, schoolName, schoolGrade, parentEmail, emergencyName,
    emergencyNumber, referralSource, referralOtherText, referralFriendName,
    instagramMama, instagramPapa, instagramAnak, isSubmitted
  ]);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const closestContainer = event.target.closest('.custom-dropdown-container');
      if (!closestContainer) {
        setIsDropdownOpen(false);
        setIsBranchDropdownOpen(false);
      } else {
        if (!closestContainer.classList.contains('program-dropdown')) {
          setIsDropdownOpen(false);
        }
        if (!closestContainer.classList.contains('branch-dropdown')) {
          setIsBranchDropdownOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Populate default dates if needed
  useEffect(() => {
    if (!todayDate) {
      setTodayDate(getTodayFormattedDate());
    }
  }, [todayDate]);

  // Handle prior program checkbox toggling
  const handleCheckboxChange = (program) => {
    if (priorPrograms.includes(program)) {
      setPriorPrograms(priorPrograms.filter((p) => p !== program));
    } else {
      setPriorPrograms([...priorPrograms, program]);
    }
  };

  // Validate Page 1
  const validatePage1 = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!fullName.trim()) {
      newErrors.fullName = 'Nama Lengkap wajib diisi';
    }

    if (!dob) {
      newErrors.dob = 'Tanggal Lahir wajib diisi';
    }

    if (!gender) {
      newErrors.gender = 'Pilih salah satu Jenis Kelamin';
    }

    if (!address.trim()) {
      newErrors.address = 'Alamat Lengkap wajib diisi';
    }

    if (!contact.trim()) {
      newErrors.contact = 'Nomor Whatsapp wajib diisi';
    } else if (!/^[0-9]+$/.test(contact.trim())) {
      newErrors.contact = 'Nomor Whatsapp hanya boleh berisi angka';
    } else if (contact.trim().length < 8) {
      newErrors.contact = 'Nomor Whatsapp terlalu pendek';
    }

    if (!programSelected) {
      newErrors.programSelected = 'Pilih salah satu program training';
    }

    if (!branchSelected) {
      newErrors.branchSelected = 'Pilih salah satu cabang SMLONE';
    }

    // Optional field, no validation needed

    if (hasPriorProgram === 'Pernah') {
      if (priorPrograms.includes('Other') && !otherProgramText.trim()) {
        newErrors.otherProgramText = 'Harap isi nama program lainnya';
      }
    }

    if (!todayDate) {
      newErrors.todayDate = 'Tanggal Hari Ini wajib diisi';
    }

    if (!consent) {
      newErrors.consent = 'Anda harus menyetujui pernyataan dokumentasi untuk melanjutkan';
    }

    setErrors(newErrors);
    return newErrors;
  };

  // Validate Page 2
  const validatePage2 = () => {
    const newErrors = {};
    const isApprenticeOrYouth = programSelected.includes('Apprentice') || programSelected.includes('Junior/Youth');

    if (isApprenticeOrYouth && !subProgramSelected) {
      newErrors.subProgramSelected = 'Pilih salah satu sub-program training';
    }

    if (!schoolName.trim()) {
      newErrors.schoolName = 'Nama Sekolah wajib diisi';
    }

    if (!schoolGrade.trim()) {
      newErrors.schoolGrade = 'Kelas wajib diisi';
    }

    if (!parentEmail.trim()) {
      newErrors.parentEmail = 'Email Orang Tua wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(parentEmail)) {
      newErrors.parentEmail = 'Format email tidak valid';
    }

    if (!emergencyName.trim()) {
      newErrors.emergencyName = 'Nama emergency contact wajib diisi';
    }

    if (!emergencyNumber.trim()) {
      newErrors.emergencyNumber = 'Nomor emergency contact wajib diisi';
    } else if (!/^[0-9]+$/.test(emergencyNumber.trim())) {
      newErrors.emergencyNumber = 'Nomor emergency contact hanya boleh berisi angka';
    }

    if (!referralSource) {
      newErrors.referralSource = 'Pilih salah satu jawaban';
    } else if (referralSource === 'Other' && !referralOtherText.trim()) {
      newErrors.referralOtherText = 'Harap isi asal mengetahui SMLONE';
    } else if (referralSource === 'Referensi Teman' && !referralFriendName.trim()) {
      newErrors.referralFriendName = 'Harap isi nama pemberi referensi';
    }

    setErrors(newErrors);
    return newErrors;
  };

  // Step 1: Click "Selanjutnya"
  const handleNext = (e) => {
    e.preventDefault();
    const newErrors = validatePage1();
    if (Object.keys(newErrors).length === 0) {
      const isApprenticeOrYouth = programSelected.includes('Apprentice') || programSelected.includes('Junior/Youth');
      if (!isApprenticeOrYouth) {
        setSubProgramSelected(programSelected);
      }
      setStep(2);
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Step 2: Click "Kembali"
  const handleBack = () => {
    setStep(1);
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Step 2: Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validatePage2();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitError('');
      
      const payload = {
        email,
        fullName,
        dob,
        gender,
        address,
        contact,
        programSelected,
        branchSelected,
        cabang: branchSelected,
        branch: branchSelected,
        hasPriorProgram,
        priorPrograms,
        otherProgramText,
        todayDate,
        consent,
        subProgramSelected,
        schoolName,
        schoolGrade,
        parentEmail,
        emergencyName,
        emergencyNumber,
        referralSource,
        referralOtherText,
        referralFriendName,
        instagramMama,
        instagramPapa,
        instagramAnak
      };

      try {
        const response = await fetch('https://api.smlone.cloud/api/webhook/level-1-keseluruhan/push', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          throw new Error('Gagal mengirim pendaftaran (Server error)');
        }
      } catch (error) {
        setIsSubmitting(false);
        setSubmitError(error.message || 'Terjadi kesalahan jaringan saat mengirim pendaftaran. Silakan coba lagi.');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Generate student card referral code
  const getReferralCode = () => {
    const firstName = fullName ? fullName.trim().split(' ')[0].toUpperCase().replace(/[^A-Z]/g, '') : 'STUDENT';
    const lastFourPhone = contact ? contact.trim().slice(-4) : '0000';
    return `REF-${firstName}-${lastFourPhone}`;
  };

  const generateCardHTML = (isForPrinting = false) => {
    const referralCode = getReferralCode();
    const logoUrl = window.location.origin + smloneLogo;
    
    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Kartu Registrasi SMLONE - ${fullName}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 40px 20px;
      background-color: #f3f6f4;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      color: #2f3e37;
    }
    .card-container {
      width: 100%;
      max-width: 580px;
      background: #ffffff;
      border: 2px solid #0f5132;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(15, 81, 50, 0.1);
      overflow: hidden;
      box-sizing: border-box;
    }
    .card-header {
      background-color: #0f5132;
      padding: 24px;
      text-align: center;
      color: #ffffff;
      border-bottom: 4px solid #b45309;
    }
    .logo-container {
      margin-bottom: 8px;
    }
    .logo-img {
      height: 50px;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }
    .card-title {
      font-family: 'Outfit', sans-serif;
      font-size: 20px;
      font-weight: 700;
      margin: 4px 0 0 0;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .card-subtitle {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.85);
      margin: 4px 0 0 0;
      font-weight: 500;
    }
    .card-body {
      padding: 24px;
    }
    .section-title {
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: #0f5132;
      border-bottom: 2px dashed #d1dbd6;
      padding-bottom: 6px;
      margin: 0 0 14px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 20px;
    }
    .detail-item {
      display: flex;
      flex-direction: column;
    }
    .detail-label {
      font-size: 11px;
      color: #576d63;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 3px;
    }
    .detail-value {
      font-size: 13.5px;
      color: #0f1c16;
      font-weight: 700;
    }
    .referral-section {
      background: #f8faf9;
      border: 2px dashed #0f5132;
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      margin-bottom: 20px;
    }
    .referral-code-text {
      font-family: 'Outfit', monospace;
      font-size: 26px;
      font-weight: 800;
      color: #b45309;
      background: rgba(180, 83, 9, 0.08);
      padding: 8px 20px;
      border-radius: 8px;
      display: inline-block;
      letter-spacing: 1px;
      border: 1.5px dashed #b45309;
    }
    .instructions-section {
      background: rgba(15, 81, 50, 0.03);
      border-left: 4px solid #0f5132;
      padding: 14px;
      border-radius: 0 10px 10px 0;
      margin-bottom: 20px;
    }
    .instructions-text {
      font-size: 12px;
      line-height: 1.6;
      color: #2f3e37;
      margin: 0;
    }
    .branches-section {
      background: #ffffff;
    }
    .branch-card {
      border: 1.5px solid #d1dbd6;
      border-radius: 10px;
      padding: 10px 14px;
      margin-bottom: 10px;
      transition: all 0.2s ease;
    }
    .branch-card.highlighted {
      border-color: #0f5132;
      background-color: rgba(15, 81, 50, 0.03);
    }
    .branch-name {
      font-size: 13px;
      font-weight: 700;
      color: #0f5132;
      margin: 0 0 3px 0;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .branch-badge {
      background-color: #b45309;
      color: #ffffff;
      font-size: 9px;
      padding: 1px 5px;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 600;
    }
    .branch-address {
      font-size: 11px;
      color: #576d63;
      margin: 0;
      line-height: 1.4;
    }
    .footer-note {
      text-align: center;
      font-size: 11px;
      color: #576d63;
      margin-top: 20px;
      border-top: 1px solid #d1dbd6;
      padding-top: 14px;
    }
    @media print {
      body {
        background-color: #ffffff;
        padding: 0;
      }
      .card-container {
        box-shadow: none;
        border: 2px solid #0f5132;
        margin: 0 auto;
      }
    }
  </style>
</head>
<body>
  <div class="card-container">
    <div class="card-header">
      <div class="logo-container">
        <img src="${logoUrl}" class="logo-img" alt="SMLONE Logo" />
      </div>
      <div class="card-title">Portal Student Registration</div>
      <div class="card-subtitle">SMLONE Indonesia - Student Account Activation</div>
    </div>
    <div class="card-body">
      <h4 class="section-title">Data Registrasi Siswa</h4>
      <div class="detail-grid">
        <div class="detail-item">
          <span class="detail-label">Nama Lengkap</span>
          <span class="detail-value">${fullName}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Program Pilihan</span>
          <span class="detail-value">${programSelected}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Tanggal Lahir</span>
          <span class="detail-value">${dob}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Cabang Registrasi</span>
          <span class="detail-value">${branchSelected}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">No. Whatsapp</span>
          <span class="detail-value">${contact}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Email Terdaftar</span>
          <span class="detail-value">${email}</span>
        </div>
      </div>

      ${programSelected !== 'Profesional' ? `
      <h4 class="section-title">Kode Referral Aktivasi Siswa</h4>
      <div class="referral-section">
        <span class="referral-code-text">${referralCode}</span>
        <p style="font-size: 11px; color: #576d63; margin: 8px 0 0 0; font-weight: 500;">Gunakan kode referral ini saat melakukan registrasi pembuatan akun siswa di cabang terdekat SMLONE</p>
      </div>
      ` : ''}

      <div class="instructions-section">
        <p class="instructions-text">
          <strong>PENTING:</strong> Segera datang ke cabang terdekat SMLONE. Tunjukkan kartu registrasi ini ke meja pelayanan, nanti pembuatan akun SMLONE Portal Students Anda akan langsung dibantu oleh <strong>Customer Relation Officer (CRO)</strong> di setiap cabang SMLONE.
        </p>
      </div>

      <h4 class="section-title">Lokasi Cabang SMLONE</h4>
      <div class="branches-section">
        <div class="branch-card ${branchSelected === 'Cemara' ? 'highlighted' : ''}">
          <div class="branch-name">
            SMLONE CEMARA ASRI
            ${branchSelected === 'Cemara' ? '<span class="branch-badge">Cabang Anda</span>' : ''}
          </div>
          <p class="branch-address">SMLONE CEMARA ASRI, Komplek Cemara Asri, Jalan Boulevard Timur 88U-88V, Medan Estate, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara 20371</p>
        </div>
        <div class="branch-card ${branchSelected === 'Timor' ? 'highlighted' : ''}">
          <div class="branch-name">
            SMLONE TIMOR
            ${branchSelected === 'Timor' ? '<span class="branch-badge">Cabang Anda</span>' : ''}
          </div>
          <p class="branch-address">SMLONE INDONESIA, Jl. Timor No.10 F, Gang Buntu, Medan Timur, Medan City, North Sumatra 20232</p>
        </div>
        <div class="branch-card ${branchSelected === 'Tritura' ? 'highlighted' : ''}">
          <div class="branch-name">
            SMLONE TRITURA
            ${branchSelected === 'Tritura' ? '<span class="branch-badge">Cabang Anda</span>' : ''}
          </div>
          <p class="branch-address">SMLONE INDONESIA, Jl. Timor No.10 F, Gang Buntu, Medan Timur, Medan City, North Sumatra 20232</p>
        </div>
      </div>

      <div class="footer-note">
        Terima kasih telah bergabung dengan SMLONE Indonesia.
      </div>
    </div>
  </div>
  ${isForPrinting ? `
  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 500);
    }
  </script>
  ` : ''}
</body>
</html>`;
  };

  const handlePrintCard = () => {
    const printWindow = window.open('', '_blank', 'width=800,height=900');
    const content = generateCardHTML(true);
    printWindow.document.open();
    printWindow.document.write(content);
    printWindow.document.close();
  };

  const handleDownloadHTML = () => {
    const content = generateCardHTML(false);
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SMLONE_Student_Card_${fullName.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Reset Form
  const handleReset = () => {
    clearLocalStorage();
    // Page 1
    setEmail('');
    setFullName('');
    setDob('');
    setGender('');
    setAddress('');
    setContact('');
    setProgramSelected('');
    setBranchSelected('');
    setHasPriorProgram('');
    setPriorPrograms([]);
    setOtherProgramText('');
    setTodayDate(getTodayFormattedDate());
    setConsent(false);
    
    // Page 2
    setSubProgramSelected('');
    setSchoolName('');
    setSchoolGrade('');
    setParentEmail('');
    setEmergencyName('');
    setEmergencyNumber('');
    setReferralSource('');
    setReferralOtherText('');
    setReferralFriendName('');
    setInstagramMama('');
    setInstagramPapa('');
    setInstagramAnak('');

    setSubmitError('');
    setErrors({});
    setStep(1);
    setIsSubmitted(false);
  };

  return (
    <div className="app-container">
      <div className="page-layout">
        
        {/* Left Side Column - Program Activity Images */}
        <aside className="side-column left-side">
          <div className="activity-card">
            <div className="activity-image-wrapper">
              <img src={imgApprentice} className="activity-image" alt="Apprentice Program" style={{ objectPosition: 'center 10%' }} />
            </div>
            <div className="activity-overlay">
              <h4 className="activity-title">Apprentice</h4>
              <p className="activity-subtitle">Program Kelas 1 SD - 3 SD</p>
            </div>
          </div>
          
          <div className="activity-card">
            <div className="activity-image-wrapper">
              <img src={imgJunior} className="activity-image" alt="Junior Program" style={{ objectPosition: 'center 15%' }} />
            </div>
            <div className="activity-overlay">
              <h4 className="activity-title">Junior</h4>
              <p className="activity-subtitle">Program Kelas 4 SD - 6 SD</p>
            </div>
          </div>
        </aside>

        {/* Center Registration Form Card */}
        <div className="form-card">
        {/* Header Section */}
        <header className="form-header">
          <div className="brand-logo-container">
            <img src={smloneLogo} className="brand-logo" alt="SMLONE Logo" />
          </div>
          <h1 className="form-title">Formulir Registrasi</h1>
          <p className="form-subtitle">Silakan isi formulir pendaftaran di bawah ini dengan lengkap dan benar.</p>
          
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: step === 1 ? '50%' : '100%' }}></div>
          </div>
          <span className="step-label">Halaman {step} dari 2</span>
        </header>

        {/* Success View */}
        {isSubmitted ? (
          <div className="success-card">
            <div className="success-icon-wrapper">
              <svg viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="success-title">Registrasi Berhasil!</h2>
            <p className="success-message">Data pendaftaran Anda telah berhasil dikirim. Berikut adalah ringkasan informasi yang Anda masukkan.</p>
            
            <div className="summary-card">
              <h3 className="summary-title">Ringkasan Data Peserta (Halaman 1)</h3>
              <div className="summary-grid" style={{ marginBottom: '20px' }}>
                <div className="summary-row">
                  <span className="summary-label">Email</span>
                  <span className="summary-val">{email}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Nama Lengkap</span>
                  <span className="summary-val">{fullName}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Tanggal Lahir</span>
                  <span className="summary-val">{dob}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Jenis Kelamin</span>
                  <span className="summary-val">{gender}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">No. Whatsapp</span>
                  <span className="summary-val">{contact}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Program Pilihan</span>
                  <span className="summary-val">{programSelected}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Cabang Lokasi</span>
                  <span className="summary-val">{branchSelected}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Alamat</span>
                  <span className="summary-val">{address}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Riwayat Program SMLONE</span>
                  <span className="summary-val">
                    {hasPriorProgram === 'Pernah' 
                      ? `Pernah (${priorPrograms.map(p => p === 'Other' ? `Lainnya: ${otherProgramText}` : p).join(', ')})`
                      : 'Tidak Pernah'
                    }
                  </span>
                </div>
              </div>

              <h3 className="summary-title">Ringkasan Orang Tua & Sekolah (Halaman 2)</h3>
              <div className="summary-grid">
                <div className="summary-row">
                  <span className="summary-label">Sub-Program SMLONE</span>
                  <span className="summary-val">{subProgramSelected}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Nama Sekolah</span>
                  <span className="summary-val">{schoolName}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Kelas</span>
                  <span className="summary-val">{schoolGrade}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Email Orang Tua</span>
                  <span className="summary-val">{parentEmail}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Emergency Contact Name</span>
                  <span className="summary-val">{emergencyName}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Emergency Contact Number</span>
                  <span className="summary-val">{emergencyNumber}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Asal Mengetahui SMLONE</span>
                  <span className="summary-val">
                    {referralSource === 'Other' ? `Lainnya: ${referralOtherText}` : referralSource}
                    {referralSource === 'Referensi Teman' && ` (Pemberi Referensi: ${referralFriendName})`}
                  </span>
                </div>
                {(instagramMama || instagramPapa || instagramAnak) && (
                  <div className="summary-row">
                    <span className="summary-label">Sosial Media Instagram</span>
                    <span className="summary-val">
                      {[
                        instagramMama && `Mama: ${instagramMama}`,
                        instagramPapa && `Papa: ${instagramPapa}`,
                        instagramAnak && `Anak: ${instagramAnak}`
                      ].filter(Boolean).join(', ')}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Visual Student Portal Activation Card */}
            <div className="student-portal-card">
              <div className="sp-card-header">
                <img src={smloneLogo} className="brand-logo" alt="SMLONE Logo" />
                <h3>Portal Student Registration</h3>
                <p>SMLONE Indonesia - Student Account Activation</p>
              </div>
              <div className="sp-card-body">
                <h4 className="sp-section-title">Data Registrasi Siswa</h4>
                <div className="sp-detail-grid">
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">Nama Lengkap</span>
                    <span className="sp-detail-value">{fullName}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">Program Pilihan</span>
                    <span className="sp-detail-value">{programSelected}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">Tanggal Lahir</span>
                    <span className="sp-detail-value">{dob}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">Cabang Registrasi</span>
                    <span className="sp-detail-value">{branchSelected}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">No. Whatsapp</span>
                    <span className="sp-detail-value">{contact}</span>
                  </div>
                  <div className="sp-detail-item">
                    <span className="sp-detail-label">Email Terdaftar</span>
                    <span className="sp-detail-value">{email}</span>
                  </div>
                </div>

                {programSelected !== 'Profesional' && (
                  <>
                    <h4 className="sp-section-title">Kode Referral Aktivasi Siswa</h4>
                    <div className="sp-barcode-box">
                      <span className="sp-referral-code">{getReferralCode()}</span>
                      <p style={{fontSize: '12px', color: '#576d63', margin: '8px 0 0 0', fontWeight: 500}}>Gunakan kode referral ini saat melakukan registrasi pembuatan akun siswa di cabang terdekat SMLONE</p>
                    </div>
                  </>
                )}

                <div className="sp-instructions">
                  <p>
                    <strong>PENTING:</strong> Segera datang ke cabang terdekat SMLONE. Tunjukkan kartu registrasi ini ke meja pelayanan, nanti pembuatan akun SMLONE Portal Students Anda akan langsung dibantu oleh <strong>Customer Relation Officer (CRO)</strong> di setiap cabang SMLONE.
                  </p>
                </div>

                <h4 className="sp-section-title">Lokasi Cabang SMLONE</h4>
                <div className="sp-branch-list">
                  <div className={`sp-branch-item ${branchSelected === 'Cemara' ? 'active' : ''}`}>
                    <div className="sp-branch-name">
                      SMLONE CEMARA ASRI
                      {branchSelected === 'Cemara' && <span className="sp-branch-badge">Cabang Anda</span>}
                    </div>
                    <p className="sp-branch-address">
                      Komplek Cemara Asri, Jalan Boulevard Timur 88U-88V, Medan Estate, Kec. Percut Sei Tuan, Kabupaten Deli Serdang, Sumatera Utara 20371
                    </p>
                  </div>
                  <div className={`sp-branch-item ${branchSelected === 'Timor' ? 'active' : ''}`}>
                    <div className="sp-branch-name">
                      SMLONE TIMOR
                      {branchSelected === 'Timor' && <span className="sp-branch-badge">Cabang Anda</span>}
                    </div>
                    <p className="sp-branch-address">
                      SMLONE INDONESIA, Jl. Timor No.10 F, Gang Buntu, Medan Timur, Medan City, North Sumatra 20232
                    </p>
                  </div>
                  <div className={`sp-branch-item ${branchSelected === 'Tritura' ? 'active' : ''}`}>
                    <div className="sp-branch-name">
                      SMLONE TRITURA
                      {branchSelected === 'Tritura' && <span className="sp-branch-badge">Cabang Anda</span>}
                    </div>
                    <p className="sp-branch-address">
                      SMLONE INDONESIA, Jl. Timor No.10 F, Gang Buntu, Medan Timur, Medan City, North Sumatra 20232
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Group */}
            <div className="success-action-group">
              <button type="button" className="primary-action-button" onClick={handlePrintCard}>
                <svg className="action-btn-icon" viewBox="0 0 24 24">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Cetak / Simpan PDF
              </button>
              <button type="button" className="secondary-action-button" onClick={handleDownloadHTML}>
                <svg className="action-btn-icon" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Unduh Kartu Registrasi
              </button>
            </div>

            <button type="button" className="reset-button" onClick={handleReset} style={{ width: '100%' }}>
              Isi Formulir Baru
            </button>
          </div>
        ) : (
          /* Form View */
          <div>
            {step === 1 ? (
              /* ==================== STEP 1 ==================== */
              <form onSubmit={handleNext} noValidate>
                {/* 1. Email */}
                <div className="form-group" id="email">
                  <label className="form-label">
                    Email <span className="required-asterisk">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                      placeholder="Contoh: rakhaakbar522@gmail.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                    />
                  </div>
                  {errors.email && <div className="error-message">⚠️ {errors.email}</div>}
                </div>

                {/* 2. Full Name */}
                <div className="form-group" id="fullName">
                  <label className="form-label">
                    Full Name <span className="required-asterisk">*</span>
                  </label>
                  <p className="form-help-text">
                    Nama Depan (Peserta Training) - Yang Akan Muncul Di Certificate. Contoh: Jovita Madeline Lionel
                  </p>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                      placeholder="Nama Lengkap"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: null });
                      }}
                    />
                  </div>
                  {errors.fullName && <div className="error-message">⚠️ {errors.fullName}</div>}
                </div>

                {/* 3. Date of Birth */}
                <div className="form-group" id="dob">
                  <label className="form-label">
                    Date of Birth <span className="required-asterisk">*</span>
                  </label>
                  <p className="form-help-text">Tanggal Lahir Anda (Day, Month, Year)</p>
                  <div className="input-wrapper">
                    <input
                      type="date"
                      className={`form-input ${errors.dob ? 'has-error' : ''}`}
                      value={dob}
                      onChange={(e) => {
                        setDob(e.target.value);
                        if (errors.dob) setErrors({ ...errors, dob: null });
                      }}
                    />
                  </div>
                  {errors.dob && <div className="error-message">⚠️ {errors.dob}</div>}
                </div>

                {/* 4. Gender */}
                <div className="form-group" id="gender">
                  <label className="form-label">
                    Gender <span className="required-asterisk">*</span>
                  </label>
                  <div className="options-grid">
                    <div 
                      className={`option-card ${gender === 'Female' ? 'selected' : ''}`}
                      onClick={() => {
                        setGender('Female');
                        if (errors.gender) setErrors({ ...errors, gender: null });
                      }}
                    >
                      <span className="option-indicator"></span>
                      Female
                    </div>
                    <div 
                      className={`option-card ${gender === 'Male' ? 'selected' : ''}`}
                      onClick={() => {
                        setGender('Male');
                        if (errors.gender) setErrors({ ...errors, gender: null });
                      }}
                    >
                      <span className="option-indicator"></span>
                      Male
                    </div>
                  </div>
                  {errors.gender && <div className="error-message">⚠️ {errors.gender}</div>}
                </div>

                {/* 5. Address */}
                <div className="form-group" id="address">
                  <label className="form-label">
                    Address <span className="required-asterisk">*</span>
                  </label>
                  <p className="form-help-text">Alamat Lengkap</p>
                  <div className="input-wrapper">
                    <textarea
                      className={`form-textarea ${errors.address ? 'has-error' : ''}`}
                      placeholder="Tuliskan alamat lengkap..."
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address) setErrors({ ...errors, address: null });
                      }}
                    />
                  </div>
                  {errors.address && <div className="error-message">⚠️ {errors.address}</div>}
                </div>

                {/* 6. Contact / Whatsapp No. */}
                <div className="form-group" id="contact">
                  <label className="form-label">
                    Contact / Whatsapp No. <span className="required-asterisk">*</span>
                  </label>
                  <p className="form-help-text">
                    Nomor Anda Yang Dapat Dihubungi. Contoh pengisian: 6285100000000
                  </p>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      className={`form-input ${errors.contact ? 'has-error' : ''}`}
                      placeholder="Contoh: 6285100000000"
                      value={contact}
                      onChange={(e) => {
                        setContact(e.target.value);
                        if (errors.contact) setErrors({ ...errors, contact: null });
                      }}
                    />
                  </div>
                  {errors.contact && <div className="error-message">⚠️ {errors.contact}</div>}
                </div>

                {/* Program Selected (Program yang ingin didaftarkan) */}
                <div className="form-group" id="programSelected">
                  <label className="form-label">
                    Program <span className="required-asterisk">*</span>
                  </label>
                  <div className="custom-dropdown-container program-dropdown">
                    <div 
                      className={`custom-dropdown-trigger ${errors.programSelected ? 'has-error' : ''} ${isDropdownOpen ? 'open' : ''}`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span>{programSelected || 'Choose'}</span>
                      <svg className="chevron-icon" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    {isDropdownOpen && (
                      <div className="custom-dropdown-options">
                        <div 
                          className={`custom-dropdown-option ${programSelected === 'Apprentice (1 SD - 3 SD)' ? 'selected' : ''}`}
                          onClick={() => {
                            setProgramSelected('Apprentice (1 SD - 3 SD)');
                            setIsDropdownOpen(false);
                            if (errors.programSelected) setErrors({ ...errors, programSelected: null });
                          }}
                        >
                          Apprentice (1 SD - 3 SD)
                        </div>
                        <div 
                          className={`custom-dropdown-option ${programSelected === 'Junior/Youth Program (4 SD - 3 SMA)' ? 'selected' : ''}`}
                          onClick={() => {
                            setProgramSelected('Junior/Youth Program (4 SD - 3 SMA)');
                            setIsDropdownOpen(false);
                            if (errors.programSelected) setErrors({ ...errors, programSelected: null });
                          }}
                        >
                          Junior/Youth Program (4 SD - 3 SMA)
                        </div>
                        <div 
                          className={`custom-dropdown-option ${programSelected === 'Program Orator 101' ? 'selected' : ''}`}
                          onClick={() => {
                            setProgramSelected('Program Orator 101');
                            setIsDropdownOpen(false);
                            if (errors.programSelected) setErrors({ ...errors, programSelected: null });
                          }}
                        >
                          Program Orator 101
                        </div>
                        <div 
                          className={`custom-dropdown-option ${programSelected === 'Professionals' ? 'selected' : ''}`}
                          onClick={() => {
                            setProgramSelected('Professionals');
                            setIsDropdownOpen(false);
                            if (errors.programSelected) setErrors({ ...errors, programSelected: null });
                          }}
                        >
                          Professionals
                        </div>
                      </div>
                    )}
                  </div>
                  {errors.programSelected && <div className="error-message">⚠️ {errors.programSelected}</div>}
                </div>

                {/* SMLONE Branch Selection */}
                <div className="form-group" id="branchSelected">
                  <label className="form-label">
                    Pilihan Cabang <span className="required-asterisk">*</span>
                  </label>
                  <p className="form-help-text">
                    Pilih cabang lokasi pendaftaran SMLONE
                  </p>
                  <div className="custom-dropdown-container branch-dropdown">
                    <div 
                      className={`custom-dropdown-trigger ${errors.branchSelected ? 'has-error' : ''} ${isBranchDropdownOpen ? 'open' : ''}`}
                      onClick={() => setIsBranchDropdownOpen(!isBranchDropdownOpen)}
                    >
                      <span>{branchSelected || 'Choose'}</span>
                      <svg className="chevron-icon" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    {isBranchDropdownOpen && (
                      <div className="custom-dropdown-options">
                        <div 
                          className={`custom-dropdown-option ${branchSelected === 'Cemara' ? 'selected' : ''}`}
                          onClick={() => {
                            setBranchSelected('Cemara');
                            setIsBranchDropdownOpen(false);
                            if (errors.branchSelected) setErrors({ ...errors, branchSelected: null });
                          }}
                        >
                          Cemara
                        </div>
                        <div 
                          className={`custom-dropdown-option ${branchSelected === 'Timor' ? 'selected' : ''}`}
                          onClick={() => {
                            setBranchSelected('Timor');
                            setIsBranchDropdownOpen(false);
                            if (errors.branchSelected) setErrors({ ...errors, branchSelected: null });
                          }}
                        >
                          Timor
                        </div>
                        <div 
                          className={`custom-dropdown-option ${branchSelected === 'Tritura' ? 'selected' : ''}`}
                          onClick={() => {
                            setBranchSelected('Tritura');
                            setIsBranchDropdownOpen(false);
                            if (errors.branchSelected) setErrors({ ...errors, branchSelected: null });
                          }}
                        >
                          Tritura
                        </div>
                      </div>
                    )}
                  </div>
                  {errors.branchSelected && <div className="error-message">⚠️ {errors.branchSelected}</div>}
                </div>

                {/* 7. SMLONE Prior Program Question */}
                <div className="form-group" id="hasPriorProgram">
                  <label className="form-label">
                    Program
                  </label>
                  <p className="form-help-text">
                    Apakah anak Anda sebelumnya pernah mengikuti program di SMLONE?
                  </p>
                  <div className="options-grid">
                    <div 
                      className={`option-card ${hasPriorProgram === 'Pernah' ? 'selected' : ''}`}
                      onClick={() => {
                        setHasPriorProgram('Pernah');
                        if (errors.hasPriorProgram) setErrors({ ...errors, hasPriorProgram: null });
                      }}
                    >
                      <span className="option-indicator"></span>
                      Pernah
                    </div>
                    <div 
                      className={`option-card ${hasPriorProgram === 'Tidak Pernah' ? 'selected' : ''}`}
                      onClick={() => {
                        setHasPriorProgram('Tidak Pernah');
                        setPriorPrograms([]);
                        setOtherProgramText('');
                        const updatedErrors = { ...errors };
                        delete updatedErrors.hasPriorProgram;
                        delete updatedErrors.priorPrograms;
                        delete updatedErrors.otherProgramText;
                        setErrors(updatedErrors);
                      }}
                    >
                      <span className="option-indicator"></span>
                      Tidak Pernah
                    </div>
                  </div>
                  {errors.hasPriorProgram && <div className="error-message">⚠️ {errors.hasPriorProgram}</div>}
                </div>

                {/* Conditional Prior Program Options */}
                {hasPriorProgram === 'Pernah' && (
                  <div className="form-group" id="priorPrograms">
                    <label className="form-label">
                      Program yang pernah diikuti
                    </label>
                    <p className="form-help-text font-sans">
                      Jika pernah mengikuti program di SMLONE, mohon pilih program yang pernah anak Anda ikuti.
                    </p>
                    <div className="checkbox-list">
                      <div 
                        className={`checkbox-item ${priorPrograms.includes('Apprentice/Junior/Youth') ? 'checked' : ''}`}
                        onClick={() => {
                          handleCheckboxChange('Apprentice/Junior/Youth');
                          if (errors.priorPrograms) setErrors({ ...errors, priorPrograms: null });
                        }}
                      >
                        <span className="checkbox-custom">
                          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        Apprentice/Junior/Youth
                      </div>

                      <div 
                        className={`checkbox-item ${priorPrograms.includes('Holiday Program') ? 'checked' : ''}`}
                        onClick={() => {
                          handleCheckboxChange('Holiday Program');
                          if (errors.priorPrograms) setErrors({ ...errors, priorPrograms: null });
                        }}
                      >
                        <span className="checkbox-custom">
                          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        Holiday Program
                      </div>

                      <div 
                        className={`checkbox-item ${priorPrograms.includes('Program Orator 101') ? 'checked' : ''}`}
                        onClick={() => {
                          handleCheckboxChange('Program Orator 101');
                          if (errors.priorPrograms) setErrors({ ...errors, priorPrograms: null });
                        }}
                      >
                        <span className="checkbox-custom">
                          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        Program Orator 101
                      </div>

                      <div 
                        className={`checkbox-item ${priorPrograms.includes('Other') ? 'checked' : ''}`}
                        onClick={() => {
                          handleCheckboxChange('Other');
                          if (errors.priorPrograms) setErrors({ ...errors, priorPrograms: null });
                        }}
                      >
                        <span className="checkbox-custom">
                          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        Other:
                      </div>
                    </div>

                    {/* Other Input Field */}
                    {priorPrograms.includes('Other') && (
                      <div className="other-input-container" id="otherProgramText">
                        <input
                          type="text"
                          className={`form-input ${errors.otherProgramText ? 'has-error' : ''}`}
                          placeholder="Masukkan nama program lainnya..."
                          value={otherProgramText}
                          onChange={(e) => {
                            setOtherProgramText(e.target.value);
                            if (errors.otherProgramText) setErrors({ ...errors, otherProgramText: null });
                          }}
                        />
                        {errors.otherProgramText && (
                          <div className="error-message">⚠️ {errors.otherProgramText}</div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* 8. Today's Date */}
                <div className="form-group" id="todayDate">
                  <label className="form-label">
                    Today's Date <span className="required-asterisk">*</span>
                  </label>
                  <p className="form-help-text">Tanggal Hari Ini</p>
                  <div className="input-wrapper">
                    <input
                      type="date"
                      className={`form-input ${errors.todayDate ? 'has-error' : ''}`}
                      value={todayDate}
                      onChange={(e) => {
                        setTodayDate(e.target.value);
                        if (errors.todayDate) setErrors({ ...errors, todayDate: null });
                      }}
                    />
                  </div>
                  {errors.todayDate && <div className="error-message">⚠️ {errors.todayDate}</div>}
                </div>

                {/* 9. Consent Checkbox */}
                <div className={`consent-container ${errors.consent ? 'has-error' : ''}`} id="consent">
                  <div 
                    className={`consent-item ${consent ? 'checked' : ''}`}
                    onClick={() => {
                      setConsent(!consent);
                      if (errors.consent) setErrors({ ...errors, consent: null });
                    }}
                  >
                    <span className="checkbox-custom" style={{ marginTop: '3px' }}>
                      <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="consent-text">
                      I Agree, to allow PT. SMLONE INDONESIA, to use any documentation taken in SMLONE programs or other related programs to be used for promotional & educational Purposes. <span className="required-asterisk">*</span>
                    </span>
                  </div>
                  {errors.consent && <div className="error-message" style={{ marginTop: '10px' }}>⚠️ {errors.consent}</div>}
                </div>

                {/* Form Actions */}
                <div className="form-actions">
                  <button type="submit" className="submit-button">
                    Selanjutnya (Next)
                  </button>
                </div>
              </form>
            ) : (
              /* ==================== STEP 2 ==================== */
              <form onSubmit={handleSubmit} noValidate>
                {submitError && (
                  <div className="error-alert" style={{ 
                    backgroundColor: 'var(--error-bg)', 
                    border: '1.5px solid var(--error)', 
                    color: 'var(--error)', 
                    borderRadius: '12px', 
                    padding: '16px', 
                    marginBottom: '24px', 
                    fontSize: '14.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span>⚠️ {submitError}</span>
                  </div>
                )}
                
                {/* Check if Apprentice or Junior/Youth is chosen */}
                {(programSelected.includes('Apprentice') || programSelected.includes('Junior/Youth')) && (
                  <div className="form-group" id="subProgramSelected">
                    <h2 style={{ fontSize: '20px', marginBottom: '4px', fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>
                      Apprentice/Junior/Youth Program Registration
                    </h2>
                    <p className="form-help-text" style={{ marginBottom: '16px' }}>Pendaftaran Program SMLONE</p>

                    <label className="form-label">
                      Apprentice/Junior/Youth SMLONE Program Yang Dipilih <span className="required-asterisk">*</span>
                    </label>
                    <div className="options-grid" style={{ gridTemplateColumns: '1fr', gap: '12px' }}>
                      <div 
                        className={`option-card ${subProgramSelected === 'The Apprentice (1 SD - 3 SD)' ? 'selected' : ''}`}
                        style={{ justifyContent: 'flex-start', padding: '14px 20px' }}
                        onClick={() => {
                          setSubProgramSelected('The Apprentice (1 SD - 3 SD)');
                          if (errors.subProgramSelected) setErrors({ ...errors, subProgramSelected: null });
                        }}
                      >
                        <span className="option-indicator"></span>
                        The Apprentice (1 SD - 3 SD)
                      </div>
                      <div 
                        className={`option-card ${subProgramSelected === 'Core (4 SD - 6 SD)' ? 'selected' : ''}`}
                        style={{ justifyContent: 'flex-start', padding: '14px 20px' }}
                        onClick={() => {
                          setSubProgramSelected('Core (4 SD - 6 SD)');
                          if (errors.subProgramSelected) setErrors({ ...errors, subProgramSelected: null });
                        }}
                      >
                        <span className="option-indicator"></span>
                        Core (4 SD - 6 SD)
                      </div>
                      <div 
                        className={`option-card ${subProgramSelected === 'Orator Society (1 SMP - 3 SMA)' ? 'selected' : ''}`}
                        style={{ justifyContent: 'flex-start', padding: '14px 20px' }}
                        onClick={() => {
                          setSubProgramSelected('Orator Society (1 SMP - 3 SMA)');
                          if (errors.subProgramSelected) setErrors({ ...errors, subProgramSelected: null });
                        }}
                      >
                        <span className="option-indicator"></span>
                        Orator Society (1 SMP - 3 SMA)
                      </div>
                    </div>
                    {errors.subProgramSelected && <div className="error-message">⚠️ {errors.subProgramSelected}</div>}
                  </div>
                )}

                {/* 2. Nama Sekolah */}
                <div className="form-group" id="schoolName">
                  <label className="form-label">
                    Nama Sekolah (Peserta Training) <span className="required-asterisk">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className={`form-input ${errors.schoolName ? 'has-error' : ''}`}
                      placeholder="Masukkan nama sekolah..."
                      value={schoolName}
                      onChange={(e) => {
                        setSchoolName(e.target.value);
                        if (errors.schoolName) setErrors({ ...errors, schoolName: null });
                      }}
                    />
                  </div>
                  {errors.schoolName && <div className="error-message">⚠️ {errors.schoolName}</div>}
                </div>

                {/* 3. Kelas */}
                <div className="form-group" id="schoolGrade">
                  <label className="form-label">
                    Kelas (Peserta Training) <span className="required-asterisk">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className={`form-input ${errors.schoolGrade ? 'has-error' : ''}`}
                      placeholder="Contoh: Kelas 3 SD, Kelas 8 SMP"
                      value={schoolGrade}
                      onChange={(e) => {
                        setSchoolGrade(e.target.value);
                        if (errors.schoolGrade) setErrors({ ...errors, schoolGrade: null });
                      }}
                    />
                  </div>
                  {errors.schoolGrade && <div className="error-message">⚠️ {errors.schoolGrade}</div>}
                </div>

                {/* 4. Parent's Email */}
                <div className="form-group" id="parentEmail">
                  <label className="form-label">
                    Parent's Email <span className="required-asterisk">*</span>
                  </label>
                  <p className="form-help-text">Email Orang Tua Untuk Menerima Receipt & Invoice</p>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      className={`form-input ${errors.parentEmail ? 'has-error' : ''}`}
                      placeholder="Contoh: rakhaakbar522@gmail.com"
                      value={parentEmail}
                      onChange={(e) => {
                        setParentEmail(e.target.value);
                        if (errors.parentEmail) setErrors({ ...errors, parentEmail: null });
                      }}
                    />
                  </div>
                  {errors.parentEmail && <div className="error-message">⚠️ {errors.parentEmail}</div>}
                </div>

                {/* 5. Emergency Contact Person */}
                <div className="form-group" id="emergencyName">
                  <label className="form-label">
                    Emergency Contact Person <span className="required-asterisk">*</span>
                  </label>
                  <p className="form-help-text">
                    Nama Orang Yang Dapat Dihubungi Ketika Kejadian Darurat (Orang Tua/ Guardian). Contoh, "Budi Santoso (Ayah/Ibu)"
                  </p>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className={`form-input ${errors.emergencyName ? 'has-error' : ''}`}
                      placeholder="Masukkan nama kontak darurat..."
                      value={emergencyName}
                      onChange={(e) => {
                        setEmergencyName(e.target.value);
                        if (errors.emergencyName) setErrors({ ...errors, emergencyName: null });
                      }}
                    />
                  </div>
                  {errors.emergencyName && <div className="error-message">⚠️ {errors.emergencyName}</div>}
                </div>

                {/* 6. Emergency Contact Number */}
                <div className="form-group" id="emergencyNumber">
                  <label className="form-label">
                    Emergency Contact Number <span className="required-asterisk">*</span>
                  </label>
                  <p className="form-help-text">
                    Nomor Kontak Ketika Kejadian Darurat. Contoh pengisian: 6285100000000
                  </p>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      className={`form-input ${errors.emergencyNumber ? 'has-error' : ''}`}
                      placeholder="Contoh: 6285100000000"
                      value={emergencyNumber}
                      onChange={(e) => {
                        setEmergencyNumber(e.target.value);
                        if (errors.emergencyNumber) setErrors({ ...errors, emergencyNumber: null });
                      }}
                    />
                  </div>
                  {errors.emergencyNumber && <div className="error-message">⚠️ {errors.emergencyNumber}</div>}
                </div>

                {/* 7. Dari Manakah Anda Mengetahui SMLONE? */}
                <div className="form-group" id="referralSource">
                  <label className="form-label">
                    Dari Manakah Anda Mengetahui SMLONE? <span className="required-asterisk">*</span>
                  </label>
                  <div className="options-grid" style={{ gridTemplateColumns: '1fr', gap: '12px' }}>
                    {[
                      'Dari Postingan Teman/ Kenalan Saya',
                      'Dari Postingan Instagram SMLONE',
                      'Dari CS SMLONE',
                      'Dari Newsletter',
                      'Referensi Teman',
                      'Other'
                    ].map((source) => (
                      <div 
                        key={source}
                        className={`option-card ${referralSource === source ? 'selected' : ''}`}
                        style={{ justifyContent: 'flex-start', padding: '12px 20px' }}
                        onClick={() => {
                          setReferralSource(source);
                          setReferralFriendName('');
                          setReferralOtherText('');
                          const updatedErrors = { ...errors };
                          delete updatedErrors.referralSource;
                          delete updatedErrors.referralFriendName;
                          delete updatedErrors.referralOtherText;
                          setErrors(updatedErrors);
                        }}
                      >
                        <span className="option-indicator"></span>
                        {source === 'Other' ? 'Other:' : source}
                      </div>
                    ))}
                  </div>

                  {/* Referral friend name details */}
                  {referralSource === 'Referensi Teman' && (
                    <div className="other-input-container" style={{ paddingLeft: '0px', marginTop: '16px' }} id="referralFriendName">
                      <label className="form-label" style={{ fontSize: '14px' }}>
                        Nama teman / nama anak teman yang mereferensikan <span className="required-asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-input ${errors.referralFriendName ? 'has-error' : ''}`}
                        placeholder="Nama teman / nama anak..."
                        value={referralFriendName}
                        onChange={(e) => {
                          setReferralFriendName(e.target.value);
                          if (errors.referralFriendName) setErrors({ ...errors, referralFriendName: null });
                        }}
                      />
                      {errors.referralFriendName && <div className="error-message">⚠️ {errors.referralFriendName}</div>}
                    </div>
                  )}

                  {/* Referral other details */}
                  {referralSource === 'Other' && (
                    <div className="other-input-container" style={{ paddingLeft: '0px', marginTop: '16px' }} id="referralOtherText">
                      <label className="form-label" style={{ fontSize: '14px' }}>
                        Tuliskan dari mana Anda mengetahui SMLONE <span className="required-asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-input ${errors.referralOtherText ? 'has-error' : ''}`}
                        placeholder="Tuliskan asal informasi..."
                        value={referralOtherText}
                        onChange={(e) => {
                          setReferralOtherText(e.target.value);
                          if (errors.referralOtherText) setErrors({ ...errors, referralOtherText: null });
                        }}
                      />
                      {errors.referralOtherText && <div className="error-message">⚠️ {errors.referralOtherText}</div>}
                    </div>
                  )}

                  {errors.referralSource && <div className="error-message">⚠️ {errors.referralSource}</div>}
                </div>

                {/* 8. Instagram Section (Note & Fields) */}
                <div style={{ backgroundColor: 'rgba(15, 81, 50, 0.03)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-heading)', fontWeight: '600', color: 'var(--primary)', marginBottom: '8px' }}>
                    Terhubung dengan Kami di Instagram 😊
                  </h3>
                  <p className="form-help-text" style={{ fontSize: '13.5px', marginBottom: '20px', lineHeight: '1.5' }}>
                    Selain melalui link report Student Success dan Weekly Report, kami akan mengupdate kegiatan trainees SMLONE di akun Instagram kami. Mohon sertakan akun Instagram Anda agar kami dapat menandai (tag) Bapak/Ibu terkait aktivitas anak-anak selama di SMLONE.
                  </p>

                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label className="form-label" style={{ fontSize: '14px' }}>Akun Instagram Mama</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="@username"
                      value={instagramMama}
                      onChange={(e) => setInstagramMama(e.target.value)}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label className="form-label" style={{ fontSize: '14px' }}>Akun Instagram Papa</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="@username"
                      value={instagramPapa}
                      onChange={(e) => setInstagramPapa(e.target.value)}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '0px' }}>
                    <label className="form-label" style={{ fontSize: '14px' }}>Akun Instagram Anak</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="@username"
                      value={instagramAnak}
                      onChange={(e) => setInstagramAnak(e.target.value)}
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="form-actions" style={{ gap: '16px', justifyContent: 'space-between' }}>
                  <button type="button" className="reset-button" onClick={handleBack}>
                    Kembali (Back)
                  </button>
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Memproses...
                      </>
                    ) : (
                      'Submit Registrasi'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>

      {/* Right Side Column - Program Activity Images */}
      <aside className="side-column right-side">
        <div className="activity-card">
          <div className="activity-image-wrapper">
            <img src={imgYouth} className="activity-image" alt="Youth Program" style={{ objectPosition: 'center 10%' }} />
          </div>
          <div className="activity-overlay">
            <h4 className="activity-title">Youth</h4>
            <p className="activity-subtitle">Program Kelas 1 SMP - 3 SMA</p>
          </div>
        </div>
        
        <div className="activity-card">
          <div className="activity-image-wrapper">
            <img src={imgProfesional} className="activity-image" alt="Professionals Program" style={{ objectPosition: 'center 15%' }} />
          </div>
          <div className="activity-overlay">
            <h4 className="activity-title">Professionals</h4>
            <p className="activity-subtitle">Program Public Speaking Dewasa</p>
          </div>
        </div>
      </aside>

      </div>
    </div>
  );
}

export default App;
