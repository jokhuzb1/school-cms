// 1-SCHOOL NAMANGAN - REALISTIC DATA
// Current Date: February 12, 2026
// Academic Year: 2025/2026 (Started September 1, 2025)

export const role = "admin";

// ============================================
// HELPER FUNCTIONS FOR DATA GENERATION
// ============================================

const uzbekMaleFirstNames = [
  "Abbos", "Akbar", "Akmal", "Alisher", "Anvar", "Aziz", "Bahrom", "Bekzod", "Botir", "Davron",
  "Dilshod", "Doston", "Eldor", "Farrux", "Farhod", "Husan", "Ibrohim", "Islom", "Jamshid", "Jasur",
  "Javlon", "Karim", "Komil", "Mansur", "Murod", "Nodir", "Otabek", "Rustam", "Sardor", "Sherzod",
  "Shohruh", "Temur", "Timur", "Tohir", "Ulug'bek", "Umid", "Vali", "Zafarjon", "Zafar", "Abdulloh",
  "Asror", "Azamat", "Bobur", "Doniyor", "Ergash", "Farkhod", "G'ani", "Humoyun", "Ilhom", "Jahongir",
  "Kozim", "Laziz", "Mirzohid", "Nurali", "Odil", "Parviz", "Qodir", "Rahmon", "Sanjar", "Suyun",
  "Toxir", "Uktam", "Valijan", "Yorqin", "Zohid", "Abbosali", "Azizbek", "Bekhruz", "Dilmurod", "Elyor"
];

const uzbekFemaleFirstNames = [
  "Adolat", "Anora", "Aziza", "Barno", "Dilfuza", "Dilnoza", "Ezoza", "Farida", "Feruza", "Gulnora",
  "Gulru", "Hilola", "Hulkar", "Iroda", "Kamola", "Laylo", "Lola", "Madina", "Maftuna", "Mahliyo",
  "Malika", "Marhabo", "Marjona", "Mavluda", "Nilufar", "Nodira", "Oydin", "Ra'no", "Roza", "Saida",
  "Sanobar", "Sevara", "Sitora", "Surayyo", "Umida", "Yulduz", "Zarina", "Zebo", "Zilola", "Barno",
  "Dildora", "Dilorom", "Farzona", "Fotima", "G'azola", "Hanifa", "Jahon", "Jasmin", "Komila", "Lobar",
  "Mahbuba", "Malohatkhan", "Mumtoz", "Nasiba", "Nigora", "Oisha", "Pardagul", "Qunduz", "Sabina", "Shohida",
  "Shoira", "Tajigul", "Ulfat", "Vasila", "Yoqutxon", "Zaynab", "Zulfiya", "Begim", "Charos", "Dono"
];

const uzbekLastNames = [
  "Abdullayev", "Aliyev", "Azimov", "Bakiyev", "Botirov", "Davronov", "Eshonov", "Fayzullayev", "G'aniyev", "Hamidov",
  "Hasanov", "Ibragimov", "Ismoilov", "Karimov", "Mahmudov", "Mirzayev", "Nazarov", "Nematov", "Olimov", "Otaboyev",
  "Po'latov", "Qodirov", "Rahimov", "Rustamov", "Saidov", "Sanayev", "Sattorov", "Sharipov", "Toshmatov", "Tursunov",
  "Umarov", "Usmonov", "Valiyev", "Xolmatov", "Yo'ldoshev", "Yusupov", "Zakirov", "Zoirov", "Asqarov", "Begmatov",
  "Dehqonov", "Ergashev", "Fazilov", "G'ofurov", "Haydarov", "Iminov", "Jalolov", "Komilov", "Latipov", "Mansurov",
  "Nabiyev", "Ortiqov", "Primov", "Qosimov", "Rajabov", "Salimov", "Tog'ayev", "Usmanov", "Vohidov", "Xakimov",
  "Yunusov", "Ziyodullayev", "Anvarov", "Bahodirov", "Choriyev", "Dadaboyev", "Eshdavlatov", "Foziljonov"
];

const namanganStreets = [
  "Mustaqillik ko'chasi", "Navoiy ko'chasi", "Bobur ko'chasi", "Amir Temur ko'chasi", "Mashrab ko'chasi",
  "Cholpon ko'chasi", "Pushkin ko'chasi", "Furqat ko'chasi", "Hamza ko'chasi", "Navbahor ko'chasi",
  "Tinchlik ko'chasi", "Paxtakor ko'chasi", "Yangi hayot ko'chasi", "G'alabа ko'chasi", "Yoshlik ko'chasi",
  "Mehnat ko'chasi", "Do'stlik ko'chasi", "Sharq ko'chasi", "Guliston ko'chasi", "Bog'ishamol ko'chasi",
  "Ipakchilik ko'chasi", "Madaniyat ko'chasi", "Sport ko'chasi", "Fan ko'chasi", "Ma'rifat ko'chasi",
  "Oqtepa ko'chasi", "Chinobod ko'chasi", "Uychi ko'chasi", "Pop ko'chasi", "Chortoq ko'chasi"
];

const namanganDistricts = [
  "Olmazor mahallasi", "Bog'iston mahallasi", "Tinchlik mahallasi", "Navbahor mahallasi", "Paxtakor mahallasi",
  "Yoshlar mahallasi", "Sharq mahallasi", "G'arb mahallasi", "Janubiy mahallasi", "Shimoliy mahallasi",
  "Markaz mahallasi", "Yangiobod mahallasi", "Saroy mahallasi", "Qo'qon yo'li mahallasi", "Pop yo'li mahallasi"
];

function generatePhone(): string {
  const prefixes = ["90", "91", "93", "94", "95", "97", "98", "99"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const number = Math.floor(1000000 + Math.random() * 9000000);
  return `+998${prefix}${number}`;
}

function generateEmail(firstName: string, lastName: string, domain: string): string {
  const cleanFirst = firstName.toLowerCase().replace(/'/g, "").replace(/'/g, "");
  const cleanLast = lastName.toLowerCase().replace(/'/g, "").replace(/'/g, "");
  return `${cleanFirst}.${cleanLast}@${domain}`;
}

function generateAddress(): string {
  const street = namanganStreets[Math.floor(Math.random() * namanganStreets.length)];
  const district = namanganDistricts[Math.floor(Math.random() * namanganDistricts.length)];
  const building = Math.floor(1 + Math.random() * 150);
  const apartment = Math.floor(1 + Math.random() * 60);
  return `Namangan shahri, ${district}, ${street}, ${building}-uy${Math.random() > 0.5 ? `, ${apartment}-xonadon` : ''}`;
}

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// ============================================
// SUBJECTS DATA
// ============================================

export const subjectsData = [
  // Core subjects for all grades
  { id: 1, name: "Matematika", teachers: [] as string[], grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 2, name: "O'zbek tili", teachers: [] as string[], grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 3, name: "O'qish", teachers: [] as string[], grades: [1, 2, 3, 4] },
  { id: 4, name: "Rus tili", teachers: [] as string[], grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 5, name: "Ingliz tili", teachers: [] as string[], grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  
  // Elementary subjects (1-4 grade)
  { id: 6, name: "Atrofimizdagi olam", teachers: [] as string[], grades: [1, 2, 3, 4] },
  { id: 7, name: "Tasviriy san'at", teachers: [] as string[], grades: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { id: 8, name: "Musiqa", teachers: [] as string[], grades: [1, 2, 3, 4, 5, 6, 7] },
  { id: 9, name: "Jismoniy tarbiya", teachers: [] as string[], grades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 10, name: "Mehnat ta'limi", teachers: [] as string[], grades: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  
  // Secondary subjects (5-11 grade)
  { id: 11, name: "Geometriya", teachers: [] as string[], grades: [7, 8, 9, 10, 11] },
  { id: 12, name: "Fizika", teachers: [] as string[], grades: [6, 7, 8, 9, 10, 11] },
  { id: 13, name: "Kimyo", teachers: [] as string[], grades: [7, 8, 9, 10, 11] },
  { id: 14, name: "Biologiya", teachers: [] as string[], grades: [5, 6, 7, 8, 9, 10, 11] },
  { id: 15, name: "Tarix", teachers: [] as string[], grades: [5, 6, 7, 8, 9, 10, 11] },
  { id: 16, name: "Geografiya", teachers: [] as string[], grades: [6, 7, 8, 9, 10, 11] },
  { id: 17, name: "Adabiyot", teachers: [] as string[], grades: [5, 6, 7, 8, 9, 10, 11] },
  { id: 18, name: "Informatika", teachers: [] as string[], grades: [5, 6, 7, 8, 9, 10, 11] },
  { id: 19, name: "Huquq asoslari", teachers: [] as string[], grades: [9, 10, 11] },
  { id: 20, name: "Iqtisod asoslari", teachers: [] as string[], grades: [10, 11] },
];

// ============================================
// CLASSES DATA (Grades 1-11, Sections A-D)
// ============================================

export const classesData: Array<{
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
}> = [];
let classId = 1;

for (let grade = 1; grade <= 11; grade++) {
  const sectionsCount = grade <= 4 ? 3 : 4; // Grades 1-4: 3 sections, 5-11: 4 sections
  const sections = ["A", "B", "C", "D"].slice(0, sectionsCount);
  
  for (const section of sections) {
    classesData.push({
      id: classId++,
      name: `${grade}${section}`,
      capacity: Math.floor(25 + Math.random() * 16), // 25-40 students
      grade: grade,
      supervisor: "", // Will be filled when generating teachers
    });
  }
}

// ============================================
// TEACHERS DATA
// ============================================

export const teachersData: Array<{
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
  sex: "male" | "female";
  birthday: string;
}> = [];

let teacherId = 1;

// Primary teachers (Grades 1-4): One teacher per class teaches all subjects
const primaryClasses = classesData.filter(c => c.grade <= 4);
for (const classData of primaryClasses) {
  const isFemale = Math.random() > 0.3; // 70% female for primary grades
  const firstName = isFemale 
    ? getRandomElement(uzbekFemaleFirstNames)
    : getRandomElement(uzbekMaleFirstNames);
  const lastName = getRandomElement(uzbekLastNames);
  const fullName = `${firstName} ${lastName}`;
  
  const teacher = {
    id: teacherId,
    teacherId: `T${String(teacherId).padStart(6, '0')}`,
    name: fullName,
    email: generateEmail(firstName, lastName, "1-school.uz"),
    photo: `https://images.pexels.com/photos/${isFemale ? '1102341' : '2888150'}/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=400`,
    phone: generatePhone(),
    subjects: ["Barcha fanlar (1-4 sinf)"],
    classes: [classData.name],
    address: generateAddress(),
    sex: (isFemale ? "female" : "male") as "male" | "female",
    birthday: `19${Math.floor(65 + Math.random() * 25)}-${String(Math.floor(1 + Math.random() * 12)).padStart(2, '0')}-${String(Math.floor(1 + Math.random() * 28)).padStart(2, '0')}`,
  };
  
  teachersData.push(teacher);
  classData.supervisor = fullName;
  teacherId++;
}

// Subject teachers (Grades 5-11)
const secondarySubjects = subjectsData.filter(s => s.grades.some(g => g >= 5));
const secondaryClasses = classesData.filter(c => c.grade >= 5);

// Create specialized teachers for each subject
for (const subject of secondarySubjects) {
  const teachersPerSubject = Math.ceil(secondaryClasses.length / 8); // Each teacher handles ~8 classes
  
  for (let i = 0; i < teachersPerSubject; i++) {
    const isFemale = Math.random() > 0.4; // 60% female
    const firstName = isFemale 
      ? getRandomElement(uzbekFemaleFirstNames)
      : getRandomElement(uzbekMaleFirstNames);
    const lastName = getRandomElement(uzbekLastNames);
    const fullName = `${firstName} ${lastName}`;
    
    // Assign classes that need this subject
    const relevantClasses = secondaryClasses.filter(c => 
      subject.grades.includes(c.grade)
    );
    const assignedClasses = getRandomElements(
      relevantClasses.map(c => c.name),
      Math.min(8, Math.ceil(relevantClasses.length / teachersPerSubject))
    );
    
    const teacher = {
      id: teacherId,
      teacherId: `T${String(teacherId).padStart(6, '0')}`,
      name: fullName,
      email: generateEmail(firstName, lastName, "1-school.uz"),
      photo: `https://images.pexels.com/photos/${isFemale ? '1102341' : '2888150'}/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=400`,
      phone: generatePhone(),
      subjects: [subject.name],
      classes: assignedClasses,
      address: generateAddress(),
      sex: (isFemale ? "female" : "male") as "male" | "female",
      birthday: `19${Math.floor(65 + Math.random() * 30)}-${String(Math.floor(1 + Math.random() * 12)).padStart(2, '0')}-${String(Math.floor(1 + Math.random() * 28)).padStart(2, '0')}`,
    };
    
    teachersData.push(teacher);
    subject.teachers.push(fullName);
    teacherId++;
  }
}

// Assign class supervisors for secondary classes (5-11)
for (const classData of secondaryClasses) {
  if (!classData.supervisor) {
    const classTeachers = teachersData.filter(t => 
      t.classes.includes(classData.name) && t.id > primaryClasses.length
    );
    if (classTeachers.length > 0) {
      classData.supervisor = getRandomElement(classTeachers).name;
    }
  }
}

// ============================================
// STUDENTS DATA (1000+ students)
// ============================================

export const studentsData: Array<{
  id: number;
  studentId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  grade: number;
  class: string;
  address: string;
  sex: "male" | "female";
  birthday: string;
  bloodType: string;
  parentId: number;
}> = [];

let studentId = 1;
let parentIdCounter = 1;

for (const classData of classesData) {
  const studentsInClass = classData.capacity;
  
  for (let i = 0; i < studentsInClass; i++) {
    const isFemale = Math.random() > 0.5;
    const firstName = isFemale 
      ? getRandomElement(uzbekFemaleFirstNames)
      : getRandomElement(uzbekMaleFirstNames);
    const lastName = getRandomElement(uzbekLastNames);
    const fullName = `${firstName} ${lastName}`;
    
    // Calculate age based on grade (grade 1 = ~6-7 years old, grade 11 = ~16-17 years old)
    const studentAge = 6 + classData.grade - 1;
    const birthYear = 2026 - studentAge;
    
    const student = {
      id: studentId,
      studentId: `2025${String(studentId).padStart(4, '0')}`,
      name: fullName,
      email: generateEmail(firstName, lastName, "1-school.uz"),
      photo: `https://images.pexels.com/photos/${isFemale ? '1102341' : '2888150'}/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=400`,
      phone: generatePhone(),
      grade: classData.grade,
      class: classData.name,
      address: generateAddress(),
      sex: (isFemale ? "female" : "male") as "male" | "female",
      birthday: `${birthYear}-${String(Math.floor(1 + Math.random() * 12)).padStart(2, '0')}-${String(Math.floor(1 + Math.random() * 28)).padStart(2, '0')}`,
      bloodType: getRandomElement(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]),
      parentId: parentIdCounter,
    };
    
    studentsData.push(student);
    studentId++;
    
    // Some parents have multiple children, so increment parent ID less frequently
    if (Math.random() > 0.3) {
      parentIdCounter++;
    }
  }
}

// Data generation complete

// ============================================
// PARENTS DATA
// ============================================

export const parentsData: Array<{
  id: number;
  name: string;
  students: string[];
  email: string;
  phone: string;
  address: string;
}> = [];

const parentGroups = new Map<number, Array<typeof studentsData[0]>>();

for (const student of studentsData) {
  if (!parentGroups.has(student.parentId)) {
    parentGroups.set(student.parentId, []);
  }
  parentGroups.get(student.parentId)!.push(student);
}

Array.from(parentGroups.entries()).forEach(([parentId, children]) => {
  const isFemale = Math.random() > 0.5;
  const firstName = isFemale 
    ? getRandomElement(uzbekFemaleFirstNames)
    : getRandomElement(uzbekMaleFirstNames);
  const lastName = children[0].name.split(' ')[1]; // Use same last name as child
  const fullName = `${firstName} ${lastName}`;
  
  const parent = {
    id: parentId,
    name: fullName,
    students: children.map((c: typeof studentsData[0]) => c.name),
    email: generateEmail(firstName, lastName, "gmail.com"),
    phone: generatePhone(),
    address: children[0].address, // Same address as children
  };
  
  parentsData.push(parent);
});

// Parents generated

// ============================================
// LESSONS/SCHEDULE DATA
// ============================================

export const lessonsData: Array<{
  id: number;
  subject: string;
  class: string;
  teacher: string;
  day: number; // 1=Monday, 6=Saturday
  startTime: string;
  endTime: string;
}> = [];

let lessonId = 1;

const timeSlots = [
  { start: "08:00", end: "08:45" },
  { start: "08:55", end: "09:40" },
  { start: "09:50", end: "10:35" },
  { start: "10:55", end: "11:40" },
  { start: "11:50", end: "12:35" },
  { start: "13:00", end: "13:45" },
];

// Create schedule for each class
for (const classData of classesData) {
  const grade = classData.grade;
  const className = classData.name;
  
  // Get subjects for this grade
  const gradeSubjects = subjectsData.filter(s => s.grades.includes(grade));
  
  // Days: Monday to Saturday (1-6), Saturday has fewer lessons
  for (let day = 1; day <= 6; day++) {
    const lessonsPerDay = day === 6 ? 3 : Math.floor(4 + Math.random() * 3); // Saturday: 3 lessons, others: 4-6
    const dailySubjects = getRandomElements(gradeSubjects, lessonsPerDay);
    
    for (let i = 0; i < dailySubjects.length; i++) {
      const subject = dailySubjects[i];
      
      // Find a teacher for this subject who teaches this class
      let teacher;
      if (grade <= 4) {
        teacher = teachersData.find(t => t.classes.includes(className) && t.subjects.includes("Barcha fanlar (1-4 sinf)"));
      } else {
        const subjectTeachers = teachersData.filter(t => 
          t.subjects.includes(subject.name) && t.classes.includes(className)
        );
        teacher = subjectTeachers.length > 0 ? getRandomElement(subjectTeachers) : teachersData[0];
      }
      
      if (teacher) {
        lessonsData.push({
          id: lessonId++,
          subject: subject.name,
          class: className,
          teacher: teacher.name,
          day: day,
          startTime: timeSlots[i].start,
          endTime: timeSlots[i].end,
        });
      }
    }
  }
}

// Lessons generated

// ============================================
// EXAMS DATA (Historical data from Sept 2025 - Feb 2026)
// ============================================

export const examsData: Array<{
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
}> = [];

let examId = 1;

// Generate exams for each month (September 2025 - February 2026)
const examMonths = [
  { year: 2025, month: 9, day: 25 },  // September
  { year: 2025, month: 10, day: 20 }, // October
  { year: 2025, month: 11, day: 18 }, // November
  { year: 2025, month: 12, day: 15 }, // December
  { year: 2026, month: 1, day: 20 },  // January
  { year: 2026, month: 2, day: 10 },  // February (upcoming)
];

for (const examDate of examMonths) {
  // Each class has 2-3 exams per month
  for (const classData of classesData) {
    const gradeSubjects = subjectsData.filter(s => s.grades.includes(classData.grade));
    const examSubjects = getRandomElements(gradeSubjects, Math.floor(2 + Math.random() * 2));
    
    for (const subject of examSubjects) {
      let teacher;
      if (classData.grade <= 4) {
        teacher = teachersData.find(t => t.classes.includes(classData.name));
      } else {
        const subjectTeachers = teachersData.filter(t => 
          t.subjects.includes(subject.name) && t.classes.includes(classData.name)
        );
        teacher = subjectTeachers.length > 0 ? getRandomElement(subjectTeachers) : teachersData.find(t => t.subjects.includes(subject.name));
      }
      
      if (teacher) {
        examsData.push({
          id: examId++,
          subject: subject.name,
          class: classData.name,
          teacher: teacher.name,
          date: `${examDate.year}-${String(examDate.month).padStart(2, '0')}-${String(examDate.day).padStart(2, '0')}`,
        });
      }
    }
  }
}

// Exams generated

// ============================================
// ASSIGNMENTS DATA
// ============================================

export const assignmentsData: Array<{
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
}> = [];

let assignmentId = 1;

// Generate weekly assignments for the current month (February 2026)
for (let week = 0; week < 4; week++) {
  const dueDay = 5 + (week * 7); // Assignments due every week
  if (dueDay > 28) continue;
  
  for (const classData of classesData) {
    const gradeSubjects = subjectsData.filter(s => s.grades.includes(classData.grade));
    const assignmentSubjects = getRandomElements(gradeSubjects, Math.floor(2 + Math.random() * 3));
    
    for (const subject of assignmentSubjects) {
      let teacher;
      if (classData.grade <= 4) {
        teacher = teachersData.find(t => t.classes.includes(classData.name));
      } else {
        const subjectTeachers = teachersData.filter(t => 
          t.subjects.includes(subject.name) && t.classes.includes(classData.name)
        );
        teacher = subjectTeachers.length > 0 ? getRandomElement(subjectTeachers) : teachersData.find(t => t.subjects.includes(subject.name));
      }
      
      if (teacher) {
        assignmentsData.push({
          id: assignmentId++,
          subject: subject.name,
          class: classData.name,
          teacher: teacher.name,
          dueDate: `2026-02-${String(dueDay).padStart(2, '0')}`,
        });
      }
    }
  }
}

// Assignments generated

// ============================================
// RESULTS DATA (Exam results with varied scores)
// ============================================

export const resultsData: Array<{
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  studentId: number;
  date: string;
  type: "exam" | "assignment";
  score: number;
}> = [];

let resultId = 1;

// Generate results for all exams
for (const exam of examsData) {
  const classStudents = studentsData.filter(s => s.class === exam.class);
  
  for (const student of classStudents) {
    // Create realistic score distribution
    // 10% excellent (90-100), 30% good (75-89), 40% average (60-74), 20% struggling (40-59)
    const rand = Math.random();
    let score;
    if (rand < 0.10) {
      score = Math.floor(90 + Math.random() * 11); // 90-100
    } else if (rand < 0.40) {
      score = Math.floor(75 + Math.random() * 15); // 75-89
    } else if (rand < 0.80) {
      score = Math.floor(60 + Math.random() * 15); // 60-74
    } else {
      score = Math.floor(40 + Math.random() * 20); // 40-59
    }
    
    resultsData.push({
      id: resultId++,
      subject: exam.subject,
      class: exam.class,
      teacher: exam.teacher,
      student: student.name,
      studentId: student.id,
      date: exam.date,
      type: "exam",
      score: score,
    });
  }
}

// Results generated

// ============================================
// ATTENDANCE DATA (September 2025 - February 2026)
// ============================================

export const attendanceData: Array<{
  id: number;
  student: string;
  studentId: number;
  class: string;
  date: string;
  status: "present" | "absent" | "late";
}> = [];

let attendanceId = 1;

// Generate attendance for school days (Mon-Sat) from Sept 1, 2025 to Feb 12, 2026
const startDate = new Date(2025, 8, 1); // September 1, 2025
const endDate = new Date(2026, 1, 12);  // February 12, 2026

for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
  const dayOfWeek = d.getDay();
  
  // Skip Sundays (0)
  if (dayOfWeek === 0) continue;
  
  const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  
  for (const student of studentsData) {
    // 85% present, 10% absent, 5% late
    const rand = Math.random();
    let status: "present" | "absent" | "late";
    
    if (rand < 0.85) {
      status = "present";
    } else if (rand < 0.95) {
      status = "absent";
    } else {
      status = "late";
    }
    
    attendanceData.push({
      id: attendanceId++,
      student: student.name,
      studentId: student.id,
      class: student.class,
      date: dateStr,
      status: status,
    });
  }
}

// Attendance generated

// ============================================
// EVENTS DATA
// ============================================

export const eventsData: Array<{
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
}> = [];

const eventTemplates = [
  { title: "Sinf uchrashuvi", time: "14:00-15:00" },
  { title: "Ota-onalar yig'ilishi", time: "15:00-17:00" },
  { title: "Ekskursiya", time: "09:00-14:00" },
  { title: "Sport musobaqasi", time: "10:00-12:00" },
  { title: "Madaniy tadbirlar", time: "13:00-15:00" },
  { title: "Fan olimpiadasi", time: "09:00-13:00" },
  { title: "Badiiy ijod to'garaglari", time: "14:00-16:00" },
  { title: "Kitobxonlik tadbiri", time: "11:00-12:30" },
];

let eventId = 1;

// Generate events for February 2026
for (let day = 13; day <= 28; day++) {
  const eventsPerDay = Math.floor(Math.random() * 3); // 0-2 events per day
  
  for (let i = 0; i < eventsPerDay; i++) {
    const event = getRandomElement(eventTemplates);
    const classData = getRandomElement(classesData);
    const [start, end] = event.time.split('-');
    
    eventsData.push({
      id: eventId++,
      title: event.title,
      class: classData.name,
      date: `2026-02-${String(day).padStart(2, '0')}`,
      startTime: start,
      endTime: end,
    });
  }
}

// Events generated

// ============================================
// ANNOUNCEMENTS DATA
// ============================================

export const announcementsData: Array<{
  id: number;
  title: string;
  class: string;
  date: string;
}> = [];

const announcementTemplates = [
  "Imtihon sanasi e'lon qilinadi",
  "Vazifa topshirish muddati",
  "Ota-onalar yig'ilishi",
  "Talabalar olimpiadasi",
  "Maktab tadbiri",
  "Sport musobaqalari",
  "Kitobxonlik bayram",
  "Fan ko'rgazmasi",
];

let announcementId = 1;

for (let day = 1; day <= 12; day++) {
  const announcementsPerDay = Math.floor(Math.random() * 2) + 1;
  
  for (let i = 0; i < announcementsPerDay; i++) {
    const title = getRandomElement(announcementTemplates);
    const classData = getRandomElement(classesData);
    
    announcementsData.push({
      id: announcementId++,
      title: title,
      class: classData.name,
      date: `2026-02-${String(day).padStart(2, '0')}`,
    });
  }
}

// Announcements generated

// ============================================
// MESSAGES DATA
// ============================================

export const messagesData: Array<{
  id: number;
  sender: string;
  recipient: string;
  subject: string;
  message: string;
  date: string;
  status: "read" | "unread";
}> = [];

const messageTemplates = [
  {
    subject: "Vazifa bo'yicha savol",
    message: "Assalomu alaykum, berilgan topshiriq bo'yicha savolim bor.",
  },
  {
    subject: "Davomat haqida",
    message: "Hurmatli ustoz, sog'liq sababli darsga kela olmadim.",
  },
  {
    subject: "Imtihon tayyorgarligi",
    message: "Yaqinlashib kelayotgan imtihon uchun qo'shimcha materiallar kerak.",
  },
  {
    subject: "Loyiha ishlari",
    message: "Guruh loyihasi bo'yicha hamkorlik qilmoqchiman.",
  },
  {
    subject: "Maktab tadbiri",
    message: "Kelgusi hafta bo'ladigan tadbir haqida ma'lumot bera olasizmi?",
  },
];

let messageId = 1;

for (let day = 1; day <= 12; day++) {
  const messagesPerDay = Math.floor(5 + Math.random() * 10);
  
  for (let i = 0; i < messagesPerDay; i++) {
    const template = getRandomElement(messageTemplates);
    const sender = Math.random() > 0.5 ? getRandomElement(studentsData).name : getRandomElement(teachersData).name;
    const recipient = Math.random() > 0.5 ? getRandomElement(teachersData).name : getRandomElement(studentsData).name;
    
    messagesData.push({
      id: messageId++,
      sender: sender,
      recipient: recipient,
      subject: template.subject,
      message: template.message,
      date: `2026-02-${String(day).padStart(2, '0')}`,
      status: Math.random() > 0.3 ? "read" : "unread",
    });
  }
}

// Messages generated

// ============================================
// CALENDAR EVENTS (for BigCalendar component)
// ============================================

export const calendarEvents: Array<{
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
}> = [];

// Generate calendar events for current week (Feb 10-16, 2026)
for (let day = 10; day <= 16; day++) {
  const dayOfWeek = new Date(2026, 1, day).getDay();
  
  // Skip Sunday
  if (dayOfWeek === 0) continue;
  
  // Get sample lessons for this day
  const sampleClass = getRandomElement(classesData);
  const dayLessons = lessonsData.filter(l => l.class === sampleClass.name && l.day === dayOfWeek);
  
  for (const lesson of dayLessons.slice(0, 6)) {
    const [startHour, startMin] = lesson.startTime.split(':').map(Number);
    const [endHour, endMin] = lesson.endTime.split(':').map(Number);
    
    calendarEvents.push({
      title: lesson.subject,
      allDay: false,
      start: new Date(2026, 1, day, startHour, startMin),
      end: new Date(2026, 1, day, endHour, endMin),
    });
  }
}

// Calendar events generated

// ============================================
// STUDENT SUBJECTS DATA (for Performance chart)
// ============================================

export const studentSubjectsData: Array<{
  id: number;
  studentId: number;
  subject: string;
  score: number;
  maxScore: number;
}> = [];

let subjectScoreId = 1;

// Generate average scores for first 100 students across their subjects
for (const student of studentsData.slice(0, 100)) {
  const gradeSubjects = subjectsData.filter(s => s.grades.includes(student.grade));
  
  for (const subject of gradeSubjects) {
    // Get all exam results for this student and subject
    const studentResults = resultsData.filter(r => 
      r.studentId === student.id && r.subject === subject.name
    );
    
    if (studentResults.length > 0) {
      const avgScore = Math.floor(
        studentResults.reduce((sum, r) => sum + r.score, 0) / studentResults.length
      );
      
      studentSubjectsData.push({
        id: subjectScoreId++,
        studentId: student.id,
        subject: subject.name,
        score: avgScore,
        maxScore: 100,
      });
    }
  }
}

// Student subject scores generated
// ALL DATA GENERATION COMPLETE
