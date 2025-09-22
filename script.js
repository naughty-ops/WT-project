const studentData = [
            { registerNo: '2401131030', admissionNo: '6982', name: 'ABDUL BASTH K', department: 'Computer Engineering', avatar: 'A', attendance: 74.8, gpa: 3.2 },
            { registerNo: '2401131031', admissionNo: '6807', name: 'ABHINAV KRISHNA C', department: 'Computer Engineering', avatar: 'A', attendance: 83.6, gpa: 3.7 },
            { registerNo: '2401131032', admissionNo: '6884', name: 'ABHISHEK V V', department: 'Computer Engineering', avatar: 'A', attendance: 84.5, gpa: 3.5 },
            { registerNo: '2401131033', admissionNo: '6928', name: 'ABIN P P', department: 'Computer Engineering', avatar: 'A', attendance: 36.3, gpa: 2.8 },
            { registerNo: '2401131036', admissionNo: '6883', name: 'AGRAJ N', department: 'Computer Engineering', avatar: 'A', attendance: 64.7, gpa: 3.4 },
            { registerNo: '2401131037', admissionNo: '7040', name: 'AKHILESH I P', department: 'Computer Engineering', avatar: 'A', attendance: 73.2, gpa: 3.1 },
            { registerNo: '2401131038', admissionNo: '7007', name: 'ALEENA', department: 'Computer Engineering', avatar: 'A', attendance: 79.2, gpa: 3.8 },
            { registerNo: '2401131039', admissionNo: '6985', name: 'ARCHANA K', department: 'Computer Engineering', avatar: 'A', attendance: 79.2, gpa: 3.6 },
            { registerNo: '2401131040', admissionNo: '7011', name: 'BHAVYA N', department: 'Computer Engineering', avatar: 'B', attendance: 76.7, gpa: 3.3 },
            { registerNo: '2401131041', admissionNo: '6825', name: 'DEVIKA E', department: 'Computer Engineering', avatar: 'D', attendance: 91.2, gpa: 3.9 },
            { registerNo: '2401131043', admissionNo: '6878', name: 'DEVIKA, P', department: 'Computer Engineering', avatar: 'D', attendance: 87.4, gpa: 3.7 },
            { registerNo: '2401131044', admissionNo: '6989', name: 'FARHAN YASEEN', department: 'Computer Engineering', avatar: 'F', attendance: 73.2, gpa: 3.2 },
            { registerNo: '2401131046', admissionNo: '6890', name: 'FATHIMA NAJA A C', department: 'Computer Engineering', avatar: 'F', attendance: 86.4, gpa: 3.8 },
            { registerNo: '2401131047', admissionNo: '6828', name: 'FATHIMA RISVANA K', department: 'Computer Engineering', avatar: 'F', attendance: 88.3, gpa: 3.9 },
            { registerNo: '2401131048', admissionNo: '6808', name: 'FATHIMATHU NAFILAH. K C', department: 'Computer Engineering', avatar: 'F', attendance: 88.0, gpa: 3.7 },
            { registerNo: '2401131049', admissionNo: '6824', name: 'HAMNA SHERIN .A', department: 'Computer Engineering', avatar: 'H', attendance: 86.4, gpa: 3.6 },
            { registerNo: '2401131050', admissionNo: '6810', name: 'MOHAMMED MUSTHAFA A K', department: 'Computer Engineering', avatar: 'M', attendance: 70.7, gpa: 3.1 },
            { registerNo: '2401131051', admissionNo: '6974', name: 'MOHAMMED ZABITH P P', department: 'Computer Engineering', avatar: 'M', attendance: 90.9, gpa: 3.9 },
            { registerNo: '2401131052', admissionNo: '6943', name: 'MUHAMMAD ANSHAD PARUTHINI', department: 'Computer Engineering', avatar: 'M', attendance: 82.6, gpa: 3.5 },
            { registerNo: '2401131053', admissionNo: '6922', name: 'MUHAMMED JASAL A.', department: 'Computer Engineering', avatar: 'M', attendance: 73.5, gpa: 3.3 },
            { registerNo: '2401131055', admissionNo: '6804', name: 'MUHAMMED RISWAN AK', department: 'Computer Engineering', avatar: 'M', attendance: 82.0, gpa: 3.4 },
            { registerNo: '2401131056', admissionNo: '6978', name: 'NABHAN C K', department: 'Computer Engineering', avatar: 'N', attendance: 84.5, gpa: 3.6 },
            { registerNo: '2401131057', admissionNo: '6970', name: 'NIMNA V', department: 'Computer Engineering', avatar: 'N', attendance: 89.0, gpa: 3.8 },
            { registerNo: '2401131058', admissionNo: '6887', name: 'RASAL JAMAN', department: 'Computer Engineering', avatar: 'R', attendance: 79.5, gpa: 3.4 },
            { registerNo: '2401131059', admissionNo: '7078', name: 'RIZWAN', department: 'Computer Engineering', avatar: 'R', attendance: 83.6, gpa: 3.5 },
            { registerNo: '2401131060', admissionNo: '6908', name: 'RUFUS SHINU POONOLIKKAL', department: 'Computer Engineering', avatar: 'R', attendance: 77.3, gpa: 3.3 },
            { registerNo: '2401131061', admissionNo: '6885', name: 'SALVA THASNI PK', department: 'Computer Engineering', avatar: 'S', attendance: 87.1, gpa: 3.7 },
            { registerNo: '2401131062', admissionNo: '6922', name: 'SAYOOJ C', department: 'Computer Engineering', avatar: 'S', attendance: 72.9, gpa: 3.2 },
            { registerNo: '2401131063', admissionNo: '6889', name: 'SHAMMA C P', department: 'Computer Engineering', avatar: 'S', attendance: 85.5, gpa: 3.6 },
            { registerNo: '2401131064', admissionNo: '6972', name: 'SHAMMA SHERIN K', department: 'Computer Engineering', avatar: 'S', attendance: 73.8, gpa: 3.3 },
            { registerNo: '2401131066', admissionNo: '6969', name: 'SIKHA.P', department: 'Computer Engineering', avatar: 'S', attendance: 65.3, gpa: 3.0 },
            { registerNo: '2401131067', admissionNo: '6806', name: 'VIPINJITH V P', department: 'Computer Engineering', avatar: 'V', attendance: 81.7, gpa: 3.5 },
            { registerNo: '2401131068', admissionNo: '6880', name: 'VISHNU P', department: 'Computer Engineering', avatar: 'V', attendance: 76.0, gpa: 3.4 },
            { registerNo: '2401131859', admissionNo: '7082', name: 'AMAL PRASAD N', department: 'Computer Engineering', avatar: 'A', attendance: 94.6, gpa: 4.0 },
            { registerNo: '2401132092', admissionNo: '6893', name: 'ADWAITH T.M', department: 'Computer Engineering', avatar: 'A', attendance: 61.5, gpa: 2.9 },
            { registerNo: '2401132093', admissionNo: '6813', name: 'AMANA E K', department: 'Computer Engineering', avatar: 'A', attendance: 86.1, gpa: 3.7 },
            { registerNo: '2401132095', admissionNo: '6917', name: 'AMAVYA ANIL K T', department: 'Computer Engineering', avatar: 'A', attendance: 90.5, gpa: 3.8 },
            { registerNo: '2401132097', admissionNo: '7044', name: 'ARJUN T', department: 'Computer Engineering', avatar: 'A', attendance: 65.3, gpa: 3.1 },
            { registerNo: '2401132099', admissionNo: '6852', name: 'ATHUL SUDHEER', department: 'Computer Engineering', avatar: 'A', attendance: 87.1, gpa: 3.6 },
            { registerNo: '2401132101', admissionNo: '6805', name: 'FAHIM MUHAMMED', department: 'Computer Engineering', avatar: 'F', attendance: 84.9, gpa: 3.5 },
            { registerNo: '2401132102', admissionNo: '6981', name: 'GOKUL KRISHNA P', department: 'Computer Engineering', avatar: 'G', attendance: 73.8, gpa: 3.3 },
            { registerNo: '2401132103', admissionNo: '6819', name: 'JINANA JABIN KP', department: 'Computer Engineering', avatar: 'J', attendance: 83.6, gpa: 3.5 },
            { registerNo: '2401132104', admissionNo: '6992', name: 'MUHAMMED SAHAD K C', department: 'Computer Engineering', avatar: 'M', attendance: 77.0, gpa: 3.4 },
            { registerNo: '2401132105', admissionNo: '6895', name: 'NUHYA NOUR K M', department: 'Computer Engineering', avatar: 'N', attendance: 82.6, gpa: 3.5 },
            { registerNo: '2401132107', admissionNo: '6962', name: 'RABIYATHUL ADABIYYA M V', department: 'Computer Engineering', avatar: 'R', attendance: 77.3, gpa: 3.3 },
            { registerNo: '2401132108', admissionNo: '6902', name: 'RIDHA FATHIMA P', department: 'Computer Engineering', avatar: 'R', attendance: 82.6, gpa: 3.5 },
            { registerNo: '2401132109', admissionNo: '7006', name: 'SAJAD M', department: 'Computer Engineering', avatar: 'S', attendance: 71.0, gpa: 3.2 },
            { registerNo: '2401132110', admissionNo: '6814', name: 'SHAMMA K M', department: 'Computer Engineering', avatar: 'S', attendance: 81.4, gpa: 3.4 },
            { registerNo: '2401132112', admissionNo: '7042', name: 'SOORAJ K P', department: 'Computer Engineering', avatar: 'S', attendance: 76.3, gpa: 3.3 },
            { registerNo: 'TMP2587', admissionNo: '7139', name: 'ABDUL MUHSIN. M', department: 'Computer Engineering', avatar: 'A', attendance: 55.1, gpa: 2.7 },
            { registerNo: 'TMP2591', admissionNo: '7129', name: 'ADITHYA KRISHNA T', department: 'Computer Engineering', avatar: 'A', attendance: 3.0, gpa: 1.5 },
            { registerNo: 'TMP2582', admissionNo: '7136', name: 'ADWATIH KRISHNA A', department: 'Computer Engineering', avatar: 'A', attendance: 76.4, gpa: 3.3 },
            { registerNo: 'TMP2590', admissionNo: '7174', name: 'ARABHI K', department: 'Computer Engineering', avatar: 'A', attendance: 63.2, gpa: 3.0 },
            { registerNo: 'TEMP3', admissionNo: '7098', name: 'ASHWIN ASOK', department: 'Computer Engineering', avatar: 'A', attendance: 48.8, gpa: 2.6 },
            { registerNo: 'TMP2589', admissionNo: '7259', name: 'FATHIMA NJILA V P', department: 'Computer Engineering', avatar: 'F', attendance: 69.7, gpa: 3.1 },
            { registerNo: 'TMP2530', admissionNo: '7100', name: 'FATHIMA SHIFA K T', department: 'Computer Engineering', avatar: 'F', attendance: 77.6, gpa: 3.4 },
            { registerNo: 'TEMP2', admissionNo: '7102', name: 'HARKRISHNA P', department: 'Computer Engineering', avatar: 'H', attendance: 86.3, gpa: 3.6 },
            { registerNo: 'TMP2583', admissionNo: '7134', name: 'MUHAMMED BABIL A', department: 'Computer Engineering', avatar: 'M', attendance: 63.5, gpa: 3.0 },
            { registerNo: 'TEMP5', admissionNo: '7099', name: 'MUHAMMED MIDHLAJ P', department: 'Computer Engineering', avatar: 'M', attendance: 79.3, gpa: 3.4 },
            { registerNo: null, admissionNo: 'TEMP6', name: 'MUHAMMED MIRSAB P', department: 'Computer Engineering', avatar: 'M', attendance: 78.9, gpa: 3.4 },
            { registerNo: 'TMP2531', admissionNo: '7131', name: 'MUHAMMED SHAJEEH K', department: 'Computer Engineering', avatar: 'M', attendance: 72.2, gpa: 3.2 },
            { registerNo: 'TMP2528', admissionNo: '7135', name: 'MUHAMMED SINAN K.P', department: 'Computer Engineering', avatar: 'M', attendance: 70.3, gpa: 3.1 },
            { registerNo: 'TMP2532', admissionNo: '63', name: 'NASIH IRFAN A', department: 'Computer Engineering', avatar: 'N', attendance: 57.4, gpa: 2.8 },
            { registerNo: 'TMP2529', admissionNo: '7108', name: 'PRAJIN C', department: 'Computer Engineering', avatar: 'P', attendance: 84.0, gpa: 3.5 },
            { registerNo: 'TMP2588', admissionNo: '7258', name: 'RIFA RAFI T C', department: 'Computer Engineering', avatar: 'R', attendance: 71.9, gpa: 3.2 },
            { registerNo: 'TMP2526', admissionNo: '7095', name: 'SMRITHI P', department: 'Computer Engineering', avatar: 'S', attendance: 53.2, gpa: 2.7 },
            { registerNo: 'TMP2527', admissionNo: '7093', name: 'SREERAJ O P', department: 'Computer Engineering', avatar: 'S', attendance: 86.0, gpa: 3.6 },
            { registerNo: 'TMP2598', admissionNo: '7318', name: 'FATHIMA FAREEDA T', department: 'Computer Engineering', avatar: 'F', attendance: 13.3, gpa: 1.8 },
            { registerNo: 'TMP2597', admissionNo: '7317', name: 'FIDHA FATHIMA T', department: 'Computer Engineering', avatar: 'F', attendance: 68.5, gpa: 3.1 },
            { registerNo: 'TMP2600', admissionNo: '7232', name: 'MUHAMMED FAZIL A', department: 'Computer Engineering', avatar: 'M', attendance: 22.4, gpa: 2.0 },
            { registerNo: 'TMP2599', admissionNo: '7238', name: 'MUHAMMED HASHIM P', department: 'Computer Engineering', avatar: 'M', attendance: 75.5, gpa: 3.3 },
            { registerNo: 'TMP2603', admissionNo: '7334', name: 'NIHAL E K', department: 'Computer Engineering', avatar: 'N', attendance: 65.4, gpa: 3.0 },
            { registerNo: 'TMP2604', admissionNo: '7152', name: 'SHAFEEDA K', department: 'Computer Engineering', avatar: 'S', attendance: 25.6, gpa: 2.2 }
        ];

        // DOM Elements
        const loginPage = document.getElementById('login-page');
        const dashboard = document.getElementById('dashboard');
        const loginForm = document.getElementById('login-form');
        const errorAlert = document.getElementById('error-alert');
        
        const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
        const sections = document.querySelectorAll('.dashboard-section');
        const logoutBtn = document.getElementById('logout-btn');
        const notificationBtn = document.getElementById('notification-btn');
        const notificationPanel = document.getElementById('notification-panel');
        const closeNotifications = document.getElementById('close-notifications');
        const overlay = document.getElementById('overlay');

        // User info elements
        const welcomeMessage = document.getElementById('welcome-message');
        const welcomeText = document.getElementById('welcome-text');
        const headerStudentInfo = document.getElementById('header-student-info');
        const userName = document.getElementById('user-name');
        const userAvatar = document.getElementById('user-avatar');
        const attendancePercentage = document.getElementById('attendance-percentage');
        const studentGpa = document.getElementById('student-gpa');
        const coursesEnrolled = document.getElementById('courses-enrolled');
        const attendancePercent = document.getElementById('attendance-percent');

        // ID Card elements
        const idName = document.getElementById('id-name');
        const idReg = document.getElementById('id-reg');
        const idAdmission = document.getElementById('id-admission');
        const idCourse = document.getElementById('id-course');
        const idValid = document.getElementById('id-valid');
        const idCardIcon = document.getElementById('id-card-icon');

        // GPA Calculator elements
        const addCourseBtn = document.getElementById('add-course');
        const calculateGpaBtn = document.getElementById('calculate-gpa');
        const courseList = document.getElementById('course-list');
        const gpaValue = document.getElementById('gpa-value');
        const totalCredits = document.getElementById('total-credits');

        // Countdown elements
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        // Courses for GPA calculator
        let courses = [];

        // Login Functionality
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const registerNo = document.getElementById('register-no').value;
            const admissionNo = document.getElementById('admission-no').value;

            // Validate credentials
            const student = studentData.find(user =>
                user.registerNo === registerNo &&
                user.admissionNo === admissionNo
            );

            if (student) {
                // Hide login page, show dashboard
                loginPage.style.display = 'none';
                dashboard.style.display = 'block';

                // Update dashboard with student info
                updateDashboard(student);

                // Store login state in localStorage
                localStorage.setItem('currentStudent', JSON.stringify(student));

                // Initialize attendance chart
                initAttendanceChart(student.attendance);

                // Initialize countdown
                initCountdown();

                // Show welcome notification
                showNotification(`Welcome back, ${student.name}!`, 'success');
            } else {
                errorAlert.style.display = 'flex';
                // Shake animation for error
                loginForm.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    loginForm.style.animation = '';
                }, 500);

                // Show error notification
                showNotification('Invalid login credentials. Please try again.', 'error');
            }
        });

        // Update dashboard with student info
        function updateDashboard(student) {
            welcomeMessage.textContent = `Welcome back, ${student.name}!`;
            welcomeText.innerHTML = `You have <strong>2 new notifications</strong> today.`;
            headerStudentInfo.textContent = `${student.name} - ${student.department}`;
            userName.textContent = student.name;
            userAvatar.src = `https://ui-avatars.com/api/?name=${student.avatar}&background=4a6cf7&color=fff`;
            attendancePercentage.textContent = `${student.attendance}%`;
            studentGpa.textContent = student.gpa;
            attendancePercent.textContent = `${student.attendance}%`;

            // Update ID card
            idName.textContent = student.name;
            idReg.textContent = student.registerNo;
            idAdmission.textContent = student.admissionNo;
            idCourse.textContent = student.department;
            idCardIcon.className = `fas fa-user-graduate`;
            
            // Set ID card expiration date (1 year from now)
            const now = new Date();
            const nextYear = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
            idValid.textContent = nextYear.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        }

        // Check if user is already logged in
        const savedStudent = localStorage.getItem('currentStudent');
        if (savedStudent) {
            const student = JSON.parse(savedStudent);
            loginPage.style.display = 'none';
            dashboard.style.display = 'block';

            // Update dashboard with student info
            updateDashboard(student);

            // Initialize attendance chart
            initAttendanceChart(student.attendance);

            // Initialize countdown
            initCountdown();
        }

        // Function to fill login form with sample credentials
        function fillLogin(registerNo, admissionNo) {
            document.getElementById('register-no').value = registerNo;
            document.getElementById('admission-no').value = admissionNo;
            errorAlert.style.display = 'none';
        }

        // Theme Toggle
        

        
        // Navigation
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                if (link.id === 'logout-btn') {
                    localStorage.removeItem('currentStudent');
                    window.location.reload();
                    return;
                }

                // Remove active class from all links and sections
                sidebarLinks.forEach(l => l.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));

                // Add active class to clicked link
                link.classList.add('active');

                // Show corresponding section
                const sectionId = link.getAttribute('data-section');
                document.getElementById(sectionId).classList.add('active');
            });
        });

        // Notification Panel Toggle
        notificationBtn.addEventListener('click', () => {
            notificationPanel.classList.add('active');
            overlay.style.display = 'block';
        });

        closeNotifications.addEventListener('click', () => {
            notificationPanel.classList.remove('active');
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', () => {
            notificationPanel.classList.remove('active');
            overlay.style.display = 'none';
        });

        // Initialize attendance chart
        function initAttendanceChart(attendance) {
            const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
            const attendanceChart = new Chart(attendanceCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Attendance %',
                        data: [
                            Math.max(70, attendance - 15 + Math.random() * 20),
                            Math.max(70, attendance - 10 + Math.random() * 15),
                            Math.max(70, attendance - 5 + Math.random() * 10),
                            Math.max(70, attendance - 2 + Math.random() * 8),
                            Math.max(70, attendance + Math.random() * 5),
                            attendance
                        ],
                        backgroundColor: 'rgba(74, 108, 247, 0.7)',
                        borderColor: 'rgba(74, 108, 247, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 70,
                            max: 100,
                            ticks: {
                                callback: function (value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        }

        // GPA Calculator functionality
        addCourseBtn.addEventListener('click', () => {
            const courseName = document.getElementById('course-name').value;
            const courseCredits = parseInt(document.getElementById('course-credits').value);
            const courseGrade = parseFloat(document.getElementById('course-grade').value);

            if (!courseName || !courseCredits || isNaN(courseCredits) || courseCredits <= 0) {
                showNotification('Please enter valid course details', 'error');
                return;
            }

            courses.push({ name: courseName, credits: courseCredits, grade: courseGrade });

            // Add to UI
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            courseItem.innerHTML = `
                <span>${courseName} (${courseCredits} credits)</span>
                <span>Grade: ${getGradeText(courseGrade)} <i class="fas fa-times remove-course" data-index="${courses.length - 1}"></i></span>
            `;
            courseList.appendChild(courseItem);

            // Add event listener for remove button
            courseItem.querySelector('.remove-course').addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                courses.splice(index, 1);
                courseItem.remove();
                // Update data-index for remaining items
                document.querySelectorAll('.remove-course').forEach((btn, i) => {
                    btn.setAttribute('data-index', i);
                });
            });

            // Clear form
            document.getElementById('course-name').value = '';
            document.getElementById('course-credits').value = '';
        });

        calculateGpaBtn.addEventListener('click', () => {
            if (courses.length === 0) {
                showNotification('Please add at least one course', 'error');
                return;
            }

            let totalGradePoints = 0;
            let totalCreditsValue = 0;

            courses.forEach(course => {
                totalGradePoints += course.grade * course.credits;
                totalCreditsValue += course.credits;
            });

            const gpa = totalGradePoints / totalCreditsValue;

            gpaValue.textContent = gpa.toFixed(2);
            totalCredits.textContent = totalCreditsValue;

            // Color code based on GPA
            if (gpa >= 3.5) {
                gpaValue.style.color = 'var(--success)';
            } else if (gpa >= 2.5) {
                gpaValue.style.color = 'var(--warning)';
            } else {
                gpaValue.style.color = 'var(--danger)';
            }
        });

        function getGradeText(gradeValue) {
            const gradeMap = {
                4: 'A',
                3.7: 'A-',
                3.3: 'B+',
                3: 'B',
                2.7: 'B-',
                2.3: 'C+',
                2: 'C',
                1.7: 'C-',
                1.3: 'D+',
                1: 'D',
                0: 'F'
            };
            return gradeMap[gradeValue] || 'N/A';
        }

        // Countdown functionality
        function initCountdown() {
            // Set the date we're counting down to (December 15, 2023)
            const examDate = new Date('September 24, 2025 09:15:00').getTime();

            // Update the countdown every 1 second
            const countdown = setInterval(() => {
                // Get today's date and time
                const now = new Date().getTime();

                // Find the distance between now and the exam date
                const distance = examDate - now;

                // Time calculations for days, hours, minutes and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the results
                daysElement.textContent = days.toString().padStart(2, '0');
                hoursElement.textContent = hours.toString().padStart(2, '0');
                minutesElement.textContent = minutes.toString().padStart(2, '0');
                secondsElement.textContent = seconds.toString().padStart(2, '0');

                // If the countdown is over, write some text
                if (distance < 0) {
                    clearInterval(countdown);
                    daysElement.textContent = '00';
                    hoursElement.textContent = '00';
                    minutesElement.textContent = '00';
                    secondsElement.textContent = '00';
                }
            }, 1000);
        }

        // Show notification function
        function showNotification(message, type = 'info') {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <p>${message}</p>
            `;

            // Add to notification panel
            document.querySelector('.notification-list').prepend(notification);

            // Show notification panel if hidden
            notificationPanel.classList.add('active');
            overlay.style.display = 'block';

            // Auto hide after 5 seconds
            setTimeout(() => {
                notificationPanel.classList.remove('active');
                overlay.style.display = 'none';
            }, 5000);
        }

        // Add shake animation for login error
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
                20%, 40%, 60%, 80% { transform: translateX(10px); }
            }
            
            .notification.success {
                border-left: 4px solid var(--success);
                background: rgba(40, 167, 69, 0.05);
            }
            
            .notification.error {
                border-left: 4px solid var(--danger);
                background: rgba(220, 53, 69, 0.05);
            }
            
            .notification.info {
                border-left: 4px solid var(--info);
                background: rgba(23, 162, 184, 0.05);
            }
        `;
        document.head.appendChild(style);

        // ID Card Download
        document.getElementById('download-id-btn').addEventListener('click', () => {
            showNotification('ID card is downloading......', 'info');
        });