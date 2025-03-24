const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const startQuestionsBtn = document.getElementById('start-questions-btn');
const currentQuestionDiv = document.getElementById('current-question');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const nextQuestionBtn = document.getElementById('next-question-btn');
const translateBtn = document.getElementById('translate-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;


// Base de données en français
const database = {
    // Informations générales
    "Qu'est-ce que SUPTECH SANTÉ ?": "SUPTECH SANTÉ est une école spécialisée en génie biomédical et en techniques de santé, offrant des diplômes d'ingénieur, de Master et de Licence. Elle fait partie de la Fondation pour la Recherche, le Développement et l'Innovation en Sciences et Ingénierie à utilité publique.",
    "Où se trouvent les campus de SUPTECH SANTÉ ?": "SUPTECH SANTÉ dispose de deux campus :\n- Campus d'Essaouira : Avenue Al Akwas, Essaouira. Contact : +212 666 405 885, contact-essaouira@suptech-sante.ma\n- Campus de Mohammedia : Zone Industrielle, Mohammedia. Contact : +212 661 625 586, contact-mohammedia@suptech-sante.ma",
    "Quels sont les diplômes délivrés par SUPTECH SANTÉ ?": "SUPTECH SANTÉ délivre des diplômes d'ingénieur d'État, de Master et de Licence dans divers domaines liés à la santé et au génie biomédical.",
    "SUPTECH SANTÉ offre-t-elle des bourses ?": "Oui, SUPTECH SANTÉ propose des bourses pouvant couvrir jusqu'à 100% des frais de scolarité pour les étudiants éligibles.",
    "Comment contacter SUPTECH SANTÉ ?": "Vous pouvez contacter SUPTECH SANTÉ par email ou téléphone :\n- Campus d'Essaouira : contact-essaouira@suptech-sante.ma, +212 666 405 885\n- Campus de Mohammedia : contact-mohammedia@suptech-sante.ma, +212 661 625 586",

    // Programmes de Licence
    "Quels sont les programmes de Licence proposés par SUPTECH SANTÉ ?": "SUPTECH SANTÉ propose les programmes de Licence suivants :\n- Licence en Maintenance Médicale (L2M)\n- Licence en Génie Industriel et Logistique Hospitalière (LGILH)\n- Licence en Informatique Décisionnelle et e-Santé (LIDES)\n- Licence en Sciences de Gestion (LSG)\n- Licence en Techniques de Laboratoires de Biologie Médicale (LTech-Labo)\n- Licence Infirmier Polyvalent (LIP)\n- Licence Infirmier en Anesthésie et Réanimation (LIAR)\n- Licence Infirmier en Instrumentalisation de Bloc Opératoire (L2IBO)\n- Licence en Management et Marketing Digital du Sport et de la Santé\n- Licence en Ingénierie et Fabrication des Dispositifs Médicaux",
    "Quelles sont les conditions d'admission pour la Licence en Maintenance Médicale (L2M) ?": "Pour la Licence en Maintenance Médicale (L2M), les conditions sont :\n- Baccalauréat scientifique (Physique, Mathématiques, Électronique, etc.)\n- Accès parallèle pour les titulaires d'un DUT ou d'un DEUG en Sciences.",
    "Quels sont les débouchés de la Licence en Maintenance Médicale (L2M) ?": "Les diplômés peuvent travailler comme :\n- Gestionnaire des équipements médicaux\n- Responsable de la sécurité des dispositifs médicaux\n- Consultant en technologies de santé\n- Technico-commercial dans le secteur de la santé.",
    "Quels sont les modules étudiés en Licence en Maintenance Médicale (L2M) ?": "Les modules incluent :\n- Introduction à la maintenance biomédicale\n- Gestion de production\n- Électronique et instrumentation biomédicale\n- Imagerie médicale\n- Statistiques appliquées à la maintenance biomédicale\n- Langues étrangères (Anglais/Français).",
    "Quels sont les frais de scolarité pour les programmes de Licence ?": "Les frais de scolarité pour les programmes de Licence sont :\n- Frais d'inscription et d'assurance : 3 550 DHS\n- Frais de scolarité : 28 000 DHS/an.",

    // Programmes de Master
    "Quels sont les programmes de Master proposés par SUPTECH SANTÉ ?": "SUPTECH SANTÉ propose les programmes de Master suivants :\n- Master en Dispositifs Médicaux et Affaires Réglementaires\n- Master en Maintenance et Génie Biomédical\n- Master en Entrepreneuriat et Management Technologique.",
    "Quelles sont les conditions d'admission pour le Master en Dispositifs Médicaux et Affaires Réglementaires ?": "Pour ce Master, les conditions sont :\n- Titulaire d'une Licence professionnelle ou fondamentale\n- Bac + 3 ou équivalent.",
    "Quels sont les débouchés du Master en Dispositifs Médicaux et Affaires Réglementaires ?": "Les diplômés peuvent occuper des postes tels que :\n- Technico-commercial en santé\n- Spécialiste biomédical hospitalier\n- Consultant en technologies de santé.",
    "Quels sont les modules étudiés en Master en Dispositifs Médicaux et Affaires Réglementaires ?": "Les modules incluent :\n- Contrôle qualité et méthodologie de résolution de problème\n- Imagerie médicale et radiothérapie\n- Cycle de vie d'un dispositif médical\n- Environnement réglementaire international.",
    "Quels sont les frais de scolarité pour les programmes de Master ?": "Les frais de scolarité pour les programmes de Master sont :\n- Frais de traitement de dossier : 200 DHS\n- Frais d'inscription et d'assurance : 3 500 DHS\n- Frais de scolarité : 32 000 DHS/an.",

    // Programmes d'Ingénieur
    "Quels sont les programmes d'Ingénieur proposés par SUPTECH SANTÉ ?": "SUPTECH SANTÉ propose les programmes d'Ingénieur suivants :\n- Génie Biomédical\n- Génie Digital et Intelligence Artificielle en Santé\n- Ingénierie Biotechnologie.",
    "Quelles sont les conditions d'admission pour le programme de Génie Biomédical ?": "Pour le Génie Biomédical, les conditions sont :\n- Bac + 2 en sciences (Physique, Mathématiques, Électronique, etc.)\n- Admission via le Concours National Commun (CNC).",
    "Quels sont les débouchés du programme de Génie Biomédical ?": "Les diplômés peuvent travailler comme :\n- Ingénieur biomédical\n- Gestionnaire des technologies de l'information en santé\n- Consultant en gestion de la maintenance biomédicale.",
    "Quels sont les modules étudiés en Génie Biomédical ?": "Les modules incluent :\n- Électronique analogique et numérique\n- Radiologie médicale\n- Traitement d'images médicales\n- Robotique médicale\n- Gestion de la maintenance.",
    "Quels sont les frais de scolarité pour les programmes d'Ingénieur ?": "Les frais de scolarité pour les programmes d'Ingénieur sont :\n- Frais d'inscription et d'assurance : 3 550 DHS\n- Frais de scolarité : 42 000 DHS/an.",

    // Classes Préparatoires Intégrées
    "Qu'est-ce que les Classes Préparatoires Intégrées à SUPTECH SANTÉ ?": "Les Classes Préparatoires Intégrées préparent les étudiants aux études d'ingénieur ou de santé. Le programme se concentre sur les sciences fondamentales comme les mathématiques, la physique, la chimie et la biologie.",
    "Quels sont les modules étudiés en Classes Préparatoires Intégrées ?": "Les modules incluent :\n- Mathématiques (Algèbre, Analyse)\n- Physique (Mécanique, Électromagnétisme)\n- Chimie\n- Informatique\n- Langues étrangères.",
    "Quels sont les frais de scolarité pour les Classes Préparatoires Intégrées ?": "Les frais de scolarité pour les Classes Préparatoires sont :\n- Frais d'inscription et d'assurance : 3 550 DHS\n- Frais de scolarité : 38 000 DHS/an.",

    // Stages et Partenariats
    "SUPTECH SANTÉ organise-t-elle des stages ?": "Oui, des stages en milieu hospitalier et dans des entreprises partenaires sont intégrés aux programmes de Licence, Master et Ingénieur.",
    "SUPTECH SANTÉ a-t-elle des partenaires ?": "Oui, SUPTECH SANTÉ collabore avec plus de 50 partenaires académiques et industriels pour offrir des opportunités de stages et de projets.",
    "Y a-t-il des cours en ligne à SUPTECH SANTÉ ?": "Oui, certains modules sont disponibles en e-learning pour faciliter l'apprentissage des étudiants.",

    // Débouchés professionnels détaillés
    "Quels sont les débouchés en Licence en Génie Industriel et Logistique Hospitalière (LGILH) ?": "Les diplômés peuvent travailler comme :\n- Responsable logistique hospitalier\n- Responsable de la production pharmaceutique\n- Consultant en gestion de la chaîne d'approvisionnement.",
    "Quels sont les débouchés en Licence en Informatique Décisionnelle et e-Santé (LIDES) ?": "Les diplômés peuvent occuper des postes tels que :\n- Data analyst en santé\n- Gestionnaire de systèmes d'information de santé\n- Développeur d'applications de santé.",
    "Quels sont les débouchés en Licence en Sciences de Gestion en Milieu Hospitalier ?": "Les diplômés peuvent travailler comme :\n- Responsable de gestion dans les hôpitaux\n- Analyste en audit de production\n- Consultant en gestion hospitalière.",
    "Quels sont les débouchés en Licence en Infirmier Polyvalent (LIP) ?": "Les diplômés peuvent travailler comme :\n- Infirmier en milieu hospitalier\n- Infirmier en soins à domicile\n- Infirmier en ONG ou associations humanitaires.",
    "Quels sont les débouchés en Licence en Infirmier en Anesthésie et Réanimation (LIAR) ?": "Les diplômés peuvent travailler comme :\n- Infirmier en bloc opératoire\n- Infirmier en réanimation\n- Infirmier en anesthésie.",
    "Quels sont les débouchés en Licence en Infirmier en Instrumentalisation de Bloc Opératoire (L2IBO) ?": "Les diplômés peuvent travailler comme :\n- Infirmier instrumentiste en bloc opératoire\n- Gestionnaire des dispositifs médicaux\n- Spécialiste en prévention des infections nosocomiales.",
    "Quels sont les débouchés en Licence en Management et Marketing Digital du Sport et de la Santé ?": "Les diplômés peuvent occuper des postes tels que :\n- Manager en marketing sportif\n- Responsable des partenariats\n- Consultant en stratégie digitale.",
    "Quels sont les débouchés en Licence en Ingénierie et Fabrication des Dispositifs Médicaux ?": "Les diplômés peuvent travailler comme :\n- Ingénieur en dispositifs médicaux\n- Technicien de fabrication\n- Responsable qualité.",
    "Quels sont les débouchés en Master en Maintenance et Génie Biomédical ?": "Les diplômés peuvent occuper des postes tels que :\n- Technicien en maintenance biomédicale\n- Ingénieur biomédical\n- Consultant en gestion de la maintenance.",
    "Quels sont les débouchés en Master en Entrepreneuriat et Management Technologique ?": "Les diplômés peuvent travailler comme :\n- Fondateur de start-up\n- Chef de produit\n- Business Developer.",

    // Modules détaillés
    "Quels sont les modules étudiés en Licence en Génie Industriel et Logistique Hospitalière (LGILH) ?": "Les modules incluent :\n- Mathématiques appliquées\n- Gestion de production\n- Logistique de distribution\n- Optimisation en théorie des graphes.",
    "Quels sont les modules étudiés en Licence en Informatique Décisionnelle et e-Santé (LIDES) ?": "Les modules incluent :\n- Mathématiques\n- Programmation\n- Intelligence Artificielle\n- Gestion hospitalière.",
    "Quels sont les modules étudiés en Licence en Sciences de Gestion en Milieu Hospitalier ?": "Les modules incluent :\n- Comptabilité générale\n- Marketing\n- Gestion financière\n- Fiscalité.",
    "Quels sont les modules étudiés en Licence en Infirmier Polyvalent (LIP) ?": "Les modules incluent :\n- Anatomie et physiologie\n- Soins infirmiers de base\n- Pharmacologie\n- Réanimation.",
    "Quels sont les modules étudiés en Licence en Infirmier en Anesthésie et Réanimation (LIAR) ?": "Les modules incluent :\n- Sémiologie médicale\n- Pharmacologie anesthésique\n- Techniques d'anesthésie\n- Réanimation et soins intensifs.",
    "Quels sont les modules étudiés en Licence en Infirmier en Instrumentalisation de Bloc Opératoire (L2IBO) ?": "Les modules incluent :\n- Anatomie\n- Techniques d'asepsie\n- Gestion des risques en bloc opératoire\n- Chirurgie robotique.",
    "Quels sont les modules étudiés en Licence en Management et Marketing Digital du Sport et de la Santé ?": "Les modules incluent :\n- Anatomie humaine\n- Marketing digital\n- Coaching\n- Gestion des ressources humaines.",
    "Quels sont les modules étudiés en Licence en Ingénierie et Fabrication des Dispositifs Médicaux ?": "Les modules incluent :\n- Mécanique\n- Biomatériaux\n- Conception de produits médicaux\n- Fabrication additive.",
    "Quels sont les modules étudiés en Master en Maintenance et Génie Biomédical ?": "Les modules incluent :\n- Gestion de la maintenance\n- Radiologie médicale\n- Robotique médicale\n- Exigences réglementaires.",
    "Quels sont les modules étudiés en Master en Entrepreneuriat et Management Technologique ?": "Les modules incluent :\n- Gestion de projet\n- Marketing technologique\n- Innovation\n- Entrepreneuriat.",
};
// Base de données en arabe
const databaseArabic = {
    // معلومات عامة
    "ما هي SUPTECH SANTÉ؟": "SUPTECH SANTÉ هي مدرسة متخصصة في الهندسة الطبية وتقنيات الصحة، تقدم شهادات في الهندسة والماجستير والليسانس. وهي جزء من مؤسسة البحث والتطوير والابتكار في العلوم والهندسة ذات المنفعة العامة.",
    "أين تقع فروع SUPTECH SANTÉ؟": "SUPTECH SANTÉ لديها فرعين:\n- فرع الصويرة: شارع الأقواس، الصويرة. الاتصال: +212 666 405 885، contact-essaouira@suptech-sante.ma\n- فرع المحمدية: المنطقة الصناعية، المحمدية. الاتصال: +212 661 625 586، contact-mohammedia@suptech-sante.ma",
    "ما هي الشهادات التي تمنحها SUPTECH SANTÉ؟": "SUPTECH SANTÉ تمنح شهادات في الهندسة الطبية، والماجستير، والليسانس في مجالات مختلفة متعلقة بالصحة والهندسة الطبية.",
    "هل تقدم SUPTECH SANTÉ منحًا دراسية؟": "نعم، تقدم SUPTECH SANTÉ منحًا دراسية يمكن أن تغطي حتى 100% من الرسوم الدراسية للطلاب المؤهلين.",
    "كيف يمكن الاتصال بـ SUPTECH SANTÉ؟": "يمكنك الاتصال بـ SUPTECH SANTÉ عبر البريد الإلكتروني أو الهاتف:\n- فرع الصويرة: contact-essaouira@suptech-sante.ma، +212 666 405 885\n- فرع المحمدية: contact-mohammedia@suptech-sante.ma، +212 661 625 586",

    // برامج الليسانس
    "ما هي برامج الليسانس التي تقدمها SUPTECH SANTÉ؟": "SUPTECH SANTÉ تقدم برامج الليسانس التالية:\n- الليسانس في الصيانة الطبية (L2M)\n- الليسانس في الهندسة الصناعية واللوجستيك المستشفيات (LGILH)\n- الليسانس في المعلوماتية القرارية والصحة الإلكترونية (LIDES)\n- الليسانس في علوم التدبير (LSG)\n- الليسانس في تقنيات مختبرات البيولوجيا الطبية (LTech-Labo)\n- الليسانس في التمريض المتعدد التخصصات (LIP)\n- الليسانس في التمريض التخدير والإنعاش (LIAR)\n- الليسانس في التمريض تجهيز غرف العمليات (L2IBO)\n- الليسانس في التدبير والتسويق الرقمي للرياضة والصحة\n- الليسانس في الهندسة وتصنيع الأجهزة الطبية",
    "ما هي شروط القبول لليسانس في الصيانة الطبية (L2M)؟": "شروط القبول لليسانس في الصيانة الطبية (L2M) هي:\n- البكالوريا العلمية (فيزياء، رياضيات، إلكترونيك، إلخ)\n- الدخول الموازي لحاملي DUT أو DEUG في العلوم.",
    "ما هي فرص العمل بعد التخرج من الليسانس في الصيانة الطبية (L2M)؟": "يمكن للخريجين العمل في:\n- مدير معدات طبية\n- مسؤول سلامة الأجهزة الطبية\n- مستشار في تقنيات الصحة\n- فني مبيعات في قطاع الصحة.",
    "ما هي المواد التي تدرس في الليسانس في الصيانة الطبية (L2M)؟": "تشمل المواد:\n- مقدمة في الصيانة الطبية\n- تدبير الإنتاج\n- الإلكترونيك والأجهزة الطبية\n- التصوير الطبي\n- الإحصاء التطبيقي في الصيانة الطبية\n- اللغات الأجنبية (الإنجليزية/الفرنسية).",
    "ما هي رسوم التسجيل لبرامج الليسانس؟": "رسوم التسجيل لبرامج الليسانس هي:\n- رسوم التسجيل والتأمين: 3,550 درهم\n- الرسوم الدراسية: 28,000 درهم سنويًا.",

    // برامج الماجستير
    "ما هي برامج الماجستير التي تقدمها SUPTECH SANTÉ؟": "SUPTECH SANTÉ تقدم برامج الماجستير التالية:\n- الماجستير في الأجهزة الطبية والشؤون التنظيمية\n- الماجستير في الصيانة والهندسة الطبية\n- الماجستير في ريادة الأعمال والتدبير التكنولوجي.",
    "ما هي شروط القبول للماجستير في الأجهزة الطبية والشؤون التنظيمية؟": "شروط القبول هي:\n- حاصل على الليسانس المهنية أو الأساسية\n- باك +3 أو ما يعادلها.",
    "ما هي فرص العمل بعد التخرج من الماجستير في الأجهزة الطبية والشؤون التنظيمية؟": "يمكن للخريجين العمل في:\n- فني مبيعات في قطاع الصحة\n- أخصائي هندسة طبية في المستشفيات\n- مستشار في تقنيات الصحة.",
    "ما هي المواد التي تدرس في الماجستير في الأجهزة الطبية والشؤون التنظيمية؟": "تشمل المواد:\n- مراقبة الجودة وحل المشكلات\n- التصوير الطبي والعلاج الإشعاعي\n- دورة حياة الجهاز الطبي\n- البيئة التنظيمية الدولية.",
    "ما هي رسوم التسجيل لبرامج الماجستير؟": "رسوم التسجيل لبرامج الماجستير هي:\n- رسوم معالجة الملف: 200 درهم\n- رسوم التسجيل والتأمين: 3,500 درهم\n- الرسوم الدراسية: 32,000 درهم سنويًا.",

    // برامج الهندسة
    "ما هي برامج الهندسة التي تقدمها SUPTECH SANTÉ؟": "SUPTECH SANTÉ تقدم برامج الهندسة التالية:\n- الهندسة الطبية\n- الهندسة الرقمية والذكاء الاصطناعي في الصحة\n- هندسة التكنولوجيا الحيوية.",
    "ما هي شروط القبول لبرنامج الهندسة الطبية؟": "شروط القبول هي:\n- باك +2 في العلوم (فيزياء، رياضيات، إلكترونيك، إلخ)\n- القبول عبر المباراة الوطنية المشتركة (CNC).",
    "ما هي فرص العمل بعد التخرج من برنامج الهندسة الطبية؟": "يمكن للخريجين العمل في:\n- مهندس طبي\n- مدير تكنولوجيا المعلومات في الصحة\n- مستشار في إدارة الصيانة الطبية.",
    "ما هي المواد التي تدرس في برنامج الهندسة الطبية؟": "تشمل المواد:\n- الإلكترونيك التماثلي والرقمي\n- التصوير الطبي\n- معالجة الصور الطبية\n- الروبوتات الطبية\n- إدارة الصيانة.",
    "ما هي رسوم التسجيل لبرامج الهندسة؟": "رسوم التسجيل لبرامج الهندسة هي:\n- رسوم التسجيل والتأمين: 3,550 درهم\n- الرسوم الدراسية: 42,000 درهم سنويًا.",

    // الأقسام التحضيرية المدمجة
    "ما هي الأقسام التحضيرية المدمجة في SUPTECH SANTÉ؟": "الأقسام التحضيرية المدمجة تعد الطلاب للدراسات الهندسية أو الصحية. يركز البرنامج على العلوم الأساسية مثل الرياضيات، الفيزياء، الكيمياء، والأحياء.",
    "ما هي المواد التي تدرس في الأقسام التحضيرية المدمجة؟": "تشمل المواد:\n- الرياضيات (الجبر، التحليل)\n- الفيزياء (الميكانيكا، الكهرومغناطيسية)\n- الكيمياء\n- الإعلاميات\n- اللغات الأجنبية.",
    "ما هي رسوم التسجيل للأقسام التحضيرية المدمجة؟": "رسوم التسجيل للأقسام التحضيرية هي:\n- رسوم التسجيل والتأمين: 3,550 درهم\n- الرسوم الدراسية: 38,000 درهم سنويًا.",

    // التداريب والشركاء
    "هل تنظم SUPTECH SANTÉ تداريب؟": "نعم، يتم تنظيم تداريب في المستشفيات والشركاء الصناعيين كجزء من برامج الليسانس، الماجستير، والهندسة.",
    "هل لدى SUPTECH SANTÉ شركاء؟": "نعم، SUPTECH SANTÉ تتعاون مع أكثر من 50 شريكًا أكاديميًا وصناعيًا لتوفير فرص التدريب والمشاريع.",
    "هل توجد دروس عبر الإنترنت في SUPTECH SANTÉ؟": "نعم، بعض المواد متاحة عبر التعلم الإلكتروني لتسهيل التعلم للطلاب.",

    // فرص العمل التفصيلية
    "ما هي فرص العمل بعد التخرج من الليسانس في الهندسة الصناعية واللوجستيك المستشفيات (LGILH)؟": "يمكن للخريجين العمل في:\n- مسؤول لوجستيك مستشفيات\n- مسؤول إنتاج الأدوية\n- مستشار في إدارة سلسلة التوريد.",
    "ما هي فرص العمل بعد التخرج من الليسانس في المعلوماتية القرارية والصحة الإلكترونية (LIDES)؟": "يمكن للخريجين العمل في:\n- محلل بيانات في الصحة\n- مدير أنظمة المعلومات الصحية\n- مطور تطبيقات الصحة.",
    "ما هي فرص العمل بعد التخرج من الليسانس في علوم التدبير في المستشفيات؟": "يمكن للخريجين العمل في:\n- مسؤول تدبير في المستشفيات\n- محلل مراقبة الإنتاج\n- مستشار في التدبير المستشفيات.",
    "ما هي فرص العمل بعد التخرج من الليسانس في التمريض المتعدد التخصصات (LIP)؟": "يمكن للخريجين العمل في:\n- ممرض في المستشفيات\n- ممرض في الرعاية المنزلية\n- ممرض في الجمعيات الإنسانية.",
    "ما هي فرص العمل بعد التخرج من الليسانس في التمريض التخدير والإنعاش (LIAR)؟": "يمكن للخريجين العمل في:\n- ممرض في غرف العمليات\n- ممرض في الإنعاش\n- ممرض في التخدير.",
    "ما هي فرص العمل بعد التخرج من الليسانس في التمريض تجهيز غرف العمليات (L2IBO)؟": "يمكن للخريجين العمل في:\n- ممرض تجهيز غرف العمليات\n- مدير الأجهزة الطبية\n- متخصص في الوقاية من العدوى.",
    "ما هي فرص العمل بعد التخرج من الليسانس في التدبير والتسويق الرقمي للرياضة والصحة؟": "يمكن للخريجين العمل في:\n- مدير تسويق رياضي\n- مسؤول الشراكات\n- مستشار في الاستراتيجية الرقمية.",
    "ما هي فرص العمل بعد التخرج من الليسانس في الهندسة وتصنيع الأجهزة الطبية؟": "يمكن للخريجين العمل في:\n- مهندس أجهزة طبية\n- فني تصنيع\n- مسؤول الجودة.",
    "ما هي فرص العمل بعد التخرج من الماجستير في الصيانة والهندسة الطبية؟": "يمكن للخريجين العمل في:\n- فني صيانة طبية\n- مهندس طبي\n- مستشار في إدارة الصيانة.",
    "ما هي فرص العمل بعد التخرج من الماجستير في ريادة الأعمال والتدبير التكنولوجي؟": "يمكن للخريجين العمل في:\n- مؤسس شركة ناشئة\n- مدير منتج\n- مطور أعمال.",

    // المواد التفصيلية
    "ما هي المواد التي تدرس في الليسانس في الهندسة الصناعية واللوجستيك المستشفيات (LGILH)؟": "تشمل المواد:\n- الرياضيات التطبيقية\n- تدبير الإنتاج\n- لوجستيك التوزيع\n- التحسين في نظرية المخططات.",
    "ما هي المواد التي تدرس في الليسانس في المعلوماتية القرارية والصحة الإلكترونية (LIDES)؟": "تشمل المواد:\n- الرياضيات\n- البرمجة\n- الذكاء الاصطناعي\n- تدبير المستشفيات.",
    "ما هي المواد التي تدرس في الليسانس في علوم التدبير في المستشفيات؟": "تشمل المواد:\n- المحاسبة العامة\n- التسويق\n- التدبير المالي\n- الضرائب.",
    "ما هي المواد التي تدرس في الليسانس في التمريض المتعدد التخصصات (LIP)؟": "تشمل المواد:\n- التشريح وعلم وظائف الأعضاء\n- التمريض الأساسي\n- علم الأدوية\n- الإنعاش.",
    "ما هي المواد التي تدرس في الليسانس في التمريض التخدير والإنعاش (LIAR)؟": "تشمل المواد:\n- علم الأمراض\n- أدوية التخدير\n- تقنيات التخدير\n- الإنعاش والرعاية المركزة.",
    "ما هي المواد التي تدرس في الليسانس في التمريض تجهيز غرف العمليات (L2IBO)؟": "تشمل المواد:\n- التشريح\n- تقنيات التعقيم\n- إدارة المخاطر في غرف العمليات\n- الجراحة الروبوتية.",
    "ما هي المواد التي تدرس في الليسانس في التدبير والتسويق الرقمي للرياضة والصحة؟": "تشمل المواد:\n- التشريح البشري\n- التسويق الرقمي\n- التدريب\n- تدبير الموارد البشرية.",
    "ما هي المواد التي تدرس في الليسانس في الهندسة وتصنيع الأجهزة الطبية؟": "تشمل المواد:\n- الميكانيكا\n- المواد الحيوية\n- تصميم المنتجات الطبية\n- التصنيع الإضافي.",
    "ما هي المواد التي تدرس في الماجستير في الصيانة والهندسة الطبية؟": "تشمل المواد:\n- إدارة الصيانة\n- التصوير الطبي\n- الروبوتات الطبية\n- المتطلبات التنظيمية.",
    "ما هي المواد التي تدرس في الماجستير في ريادة الأعمال والتدبير التكنولوجي؟": "تشمل المواد:\n- تدبير المشاريع\n- التسويق التكنولوجي\n- الابتكار\n- ريادة الأعمال.",
};

let currentLanguage = 'fr'; // Par défaut en français
let isDarkMode = false; // Par défaut en mode clair

const questions = Object.keys(database);
let currentQuestionIndex = 0;

// Afficher la première question
startQuestionsBtn.addEventListener('click', () => {
    startQuestionsBtn.classList.add('hidden');
    currentQuestionDiv.classList.remove('hidden');
    showQuestion();
});

// Afficher la question actuelle
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = currentLanguage === 'fr' ? questions[currentQuestionIndex] : Object.keys(databaseArabic)[currentQuestionIndex];
        answerText.classList.add('hidden');
        nextQuestionBtn.classList.add('hidden');
    } else {
        currentQuestionDiv.innerHTML = "<p>" + (currentLanguage === 'fr' ? "Toutes les questions ont été répondues." : "تمت الإجابة على جميع الأسئلة.") + "</p>";
    }
}

// Remplir la zone de saisie avec la question sélectionnée
questionText.addEventListener('click', () => {
    userInput.value = currentLanguage === 'fr' ? questions[currentQuestionIndex] : Object.keys(databaseArabic)[currentQuestionIndex];
});

// Fonction pour ajouter un message dans le chat
function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // Faire défiler automatiquement vers le bas
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Envoyer une question
sendBtn.addEventListener('click', async () => {
    const question = userInput.value.trim();
    if (question) {
        addMessage(question, true); // Afficher la question de l'utilisateur

        // Vérifier si la question existe dans la base de données
        const answer = currentLanguage === 'fr' ? database[question] || databaseArabic[question] : databaseArabic[question] || database[question];

        if (answer) {
            addMessage(answer, false); // Afficher la réponse du chatbot
        } else {
            // Si la question n'a pas de réponse, l'envoyer au backend
            try {
                const response = await fetch('http://localhost:5000/save-question', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        question: question,
                        email: "yassinelamachi16@gmail.com" // Remplacez par l'e-mail de l'utilisateur si disponible
                    })
                });

                if (response.ok) {
                    addMessage("Nous n'avons pas de réponse à cette question. Nous la traiterons bientôt !", false);
                } else {
                    addMessage("Une erreur s'est produite. Veuillez réessayer plus tard.", false);
                }
            } catch (error) {
                console.error("Erreur lors de l'envoi de la question au backend :", error);
                addMessage("Une erreur s'est produite. Veuillez réessayer plus tard.", false);
            }
        }

        userInput.value = ''; // Vider la zone de saisie

        // Passer à la question suivante après un court délai
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 1000); // Délai de 1 seconde avant de passer à la question suivante
    }
});

// Envoyer une question avec la touche Entrée
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});

// Traduction français-arabe
translateBtn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'fr' ? 'ar' : 'fr';
    translateBtn.textContent = currentLanguage === 'fr' ? 'Traduire en Arabe' : 'ترجمة إلى الفرنسية';
    currentQuestionIndex = 0; // Réinitialiser l'index des questions
    showQuestion(); // Recharger la question actuelle dans la nouvelle langue
});

// Basculer entre le mode sombre et le mode clair
darkModeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode', isDarkMode);
    darkModeBtn.textContent = isDarkMode ? 'Mode Clair' : 'Mode Sombre';
});

// Afficher les suggestions au chargement de la page
showQuestion();

document.getElementById('quiz-btn').addEventListener('click', () => {
    window.location.href = 'quiz.html';
});