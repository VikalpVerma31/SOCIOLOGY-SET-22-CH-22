const questions = [
    {
        question:". किसका कथन है 'श्रमिक वर्ग की निर्धनता तथा समुदाय की प्रकृति और समस्याओं सम्बन्धी तथ्य खोजने वाला अध्ययन ही सामाजिक सर्वेक्षण है' ?",
        answers: [
            { text: "दुर्खीम", correct: false},
            { text: "वेल्स", correct: true},
            { text: "मार्क्स", correct: false},
      
        ] 
    },

    {
        question:"गहन सूचनाओं का संकलन, लचीलापन, अत्यधिक अर्थपूर्ण सूचनाएँ तुरंत एवं स्वाभाविक स्तर, इत्यादि किस पद्धति के महत्व व गुण है ?",
        answers: [
            { text: "वैयक्तिक", correct: false},
            { text: "अल्फ्रेड", correct: false},
            { text: "तुलनात्मक", correct: false},
            { text: "साक्षात्कार", correct: true},
        ] 
    },

    {
        question:"वैयक्तिक अध्ययन पद्धति का व्यवस्थित रूप से सर्वप्रथम प्रयोग प्रसिद्ध समाजशास्त्री द्वारा किया गया था ?",
        answers: [
            { text: "हरबर्ट स्पेन्सर", correct: true},
            { text: "गुडे एवं हाट", correct: false},
            { text: "जोहाद", correct: false},
            { text: "गिडिंग्स", correct: false},
        ] 
    },

    {
        question:"वह प्रविधि क्या है, जिसके माध्यम से किसी भी लेखक द्वारा लिखे गए टेक्स्ट का वास्तविक अर्थ (निरूपण) उसके द्वारा लिखे गए भाषा में ही करने का प्रयास किया जाता है ?",
        answers: [
            { text: "सर्वेक्षण विधि", correct: false},
            { text: "समस्या का कथन", correct: false},
            { text: "निरूपण", correct: false},
            { text: "आंकड़ा विश्लेषण", correct: true},
        ] 
    },

    {
        question:"सविधिक शिक्षा (Formal Education) वह है जो -",
        answers: [
            { text: "किसी विशेष व्यक्ति को दी जाती है", correct: false},
            { text: "जानबूझकर, विचार पूर्वक तथा क्रमबद्ध रूप से दी जाती है", correct: true},
            { text: "इनमें अध्यापक का कोई हाथ नहीं होता है, वह केवल बालक से संबंधित होती है", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"बिना किसी उद्देश्य के तथा बिना समय तथा स्थान के जो शिक्षा व्यक्ति ग्रहण करता है उसे",
        answers: [
            { text: "शिक्षण निदानात्मक (Diagnostic) कहते हैं", correct: false},
            { text: "शिक्षण उपचारात्मक (Remedical) कहते हैं", correct: false},
            { text: "औपचारिक शिक्षा (Formal Education) कहते हैं", correct: false},
            { text: "अनौपचारिक शिक्षा (Informal Education) कहते हैं", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सी अनुसूची की विशेषताएँ हैं ?",
        answers: [
            { text: "सरल एवं स्पष्ट प्रश्न", correct: false},
            { text: "क्रॉस प्रश्नों की व्यवस्था", correct: false},
            { text: "प्रश्नों का उचित क्रम", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"'सामान्य रूप से प्रश्नावली से तात्पर्य प्रश्नों के उत्तर प्राप्त करने की पद्धति है, जिसमें एक पत्रक का प्रयोग किया जाता है, जिसे उत्तरदाता स्वयं भरता है।'",
        answers: [
            { text: "जॉन डी. वी.", correct: false},
            { text: "सर चार्ल्स", correct: false},
            { text: "गुडे एवं हाट", correct: true},
            { text: "स्पेन्सर", correct: false},
        ] 
    },

    {
        question:"यद्यपि सामाजिक विज्ञानों में सांख्यिकी का प्रयोग बढ़ रहा है, फिर भी इसकी कुछ सीमाएँ हैं, निम्नलिखित में से इसकी कौन-सी सीमाएँ हैं ?",
        answers: [
            { text: "आँकड़ों में सजातीयता", correct: false},
            { text: "केवल समूहों का अध्ययन", correct: false},
            { text: "केवल संख्यात्म्क तथ्यों का अध्ययन", correct: false},
            { text: "उपरोक्त सभी", correct: true},
        ] 
    },

    {
        question:"समय-समय पर ली जाने वाली परीक्षाओं के विषय में कौन सा कथन अनुचित होगा ?",
        answers: [
            { text: "विद्यार्थी परीक्षा से लिखने की कला सीख जात", correct: true},
            { text: "उदाहरण प्रस्तुत करना सीख जाता है।", correct: false},
            { text: "उत्तर हाँ या ना में दे सकता है।", correct: false},
            { text: "अपने समस्या का समाधान करना सीख जाता है।", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित समाजशास्त्रियों / विद्वानों में से किनक सम्बन्ध सामाजिक अनुसंधान से है ?",
        answers: [
            { text: "रैडमैन एवं मोरी", correct: false},
            { text: "छिटने", correct: false},
            { text: "पी. पी. यंग", correct: false},
            { text: "ये सभी", correct: true},
        ] 
    },

    {
        question:"सामाजिक शोध सामाजिक वास्तविकता से सम्बन्धित है, परन्तु इसका उद्देश्य किस प्रकार से सामाजिक वास्तविकता को समझने से है ?",
        answers: [
            { text: "वस्तुनिष्ठ समझ", correct: false},
            { text: "क्रमबद्ध रूप में समझ", correct: false},
            { text: "(a) और (b) दोनों", correct: true},
            { text: "केवल ज्ञान प्राप्त करना", correct: false},
        ] 
    },

    {
        question:"कागज, कम्प्यूटर आदि पर मानव द्वारा बनाए गए चिन्हों, शब्दों, विचारों, आदि को एकत्रित करने के पश्चात् उसे किस नाम या रूप में नामोल्लेख किया जाता है।",
        answers: [
            { text: "पुस्तक", correct: false},
            { text: "सूचना", correct: false},
            { text: "प्रलेख", correct: true},
            { text: "इतिहास", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा / से सामाजिक का सोपान नहीं है ?",
        answers: [
            { text: "व्यक्तियों के नाम", correct: false},
            { text: "सही माप-तौल", correct: true},
            { text: "समस्या का चुनाव", correct: false},
            { text: "वस्तुनिष्ठता की समस्या", correct: false},
        ] 
    },

    {
        question:"एक ऐसा व्यक्तिगत प्रलेख, जिसमें एक व्यक्ति अपने दिन-प्रतिदिन की घटनाओं को लिखता है, कहलाता है",
        answers: [
            { text: "कैलेण्डर", correct: false},
            { text: "डायरियाँ", correct: true},
            { text: "किताब", correct: false},
            { text: "पत्र", correct: false},
        ] 
    },

    {
        question:"तथ्यों एवं सिद्धान्तों या किसी भी घटना को ज्ञात करने हेतु सावधानीपूर्वक एवं विवेचनात्मक खोज या निष्ठापूर्वक किये गए अन्वेषण को क्या कहते हैं?",
        answers: [
            { text: "शोध", correct: true},
            { text: "वैज्ञानिक", correct: false},
            { text: "घटनाएँ", correct: false},
            { text: "अवलोकन", correct: false},
        ] 
    },

    {
        question:"एम. एन. श्रीनिवास कौन-से देश के प्रमुख समाजशास्त्री हैं ?",
        answers: [
            { text: "चीन के", correct: false},
            { text: "पंजाब के", correct: false},
            { text: "भारत के", correct: true},
            { text: "उपर्युक्त सभी के", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सा निष्कर्ष सही है ?",
        answers: [
            { text: "जातिवाद ने सामाजिक को नष्ट कर दिय", correct: true},
            { text: "समाज को विघटन की ओर ले जाना", correct: false},
            { text: "जाति व्यवस्था का सीधा परिणाम", correct: false},
            { text: "उपर्युक्त सभी", correct: false},
        ] 
    },

    {
        question:"जब एक अप्रवासी समूह अपनी पूर्व क सांस्कृतिकता को छोड़ देता है तथा मेजबान समूह को अपनाता है, तो उसे कहा जाता है -",
        answers: [
            { text: "धर्मीकरण", correct: false},
            { text: "आत्मासातकरण", correct: true},
            { text: "पारिवारिक", correct: false},
            { text: "सांस्कृतिकरण", correct: false},
        ] 
    },

    {
        question:"एक सर्जन ऑपरेशन करत समय अपनी चिकित्सा टीम सदस्यों के साथ मजाक करता है। उसका व्यवहार एक उदाहरण है",
        answers: [
            { text: "धर्म का अंतर", correct: false},
            { text: "अपेक्षा का", correct: false},
            { text: "निष्पादन का", correct: false},
            { text: "भूमिका अपनापन का", correct: true},
        ] 
    },

    {
        question:"भारत में किसे समाजशास्त्र को इतिहासपरतवाद और संस्कृतिविज्ञान की छाया से बाहर निकलने का श्रेय दिया जाता है ?",
        answers: [
            { text: "योगेन्द्र सिंह", correct: false},
            { text: "एम. एन. श्रीनिवास", correct: true},
            { text: "मार्क्स", correct: false},
            { text: "जी. एल. घुरिये", correct: false},
        ] 
    },


    {
        question:"प्रकार्यवाद के क्षेत्र में प्रकाय, अकार्य, प्रकट तथा अप्रकट प्रकार्य नामक अवधारणाओं को प्रतिपादित करने का श्रेय किस विद्वान को है ?",
        answers: [
            { text: "जॉनसन", correct: false},
            { text: "मर्कस", correct: false},
            { text: "इमाईल दुर्खीम", correct: false},
            { text: "आर. के. मर्टन", correct: true},
        ] 
    },
    {
        question:"गलत मेल कौन-सा है ?",
        answers: [
            { text: "कॉम्ट - 'पाजिटिव फिलॉस्फी'", correct: false},
            { text: "कार्ल मार्क्स - 'एटीन्थ बुमेअ'", correct: true},
            { text: "मार्क्स - द होली फैमिली", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"जनरीतियों का समाज में क्या महत्व है ?",
        answers: [
            { text: "इसके आधार पर मानव-व्यवहार का सही अनुमान लगा सकते हैं।", correct: false},
            { text: "आचरण करने की मान्यता प्राप्त रीतियाँ", correct: false},
            { text: "उसके द्वारा व्यक्ति आसानी से व्यवहार करना सीख लेता है।", correct: false},
            { text: "उपरोक्त सभी", correct: true},
        ] 
    },
    {
        question:"रेडक्लिन ब्राउन की पुस्तक 'आन जोकिंग रिलेशनशिप कब प्रकाशित हुई ?",
        answers: [
            { text: "1940 में", correct: true},
            { text: "1988 में", correct: false},
            { text: "1947 में", correct: false},
            { text: "2000 में", correct: false},
        ] 
    },

    {
        question:"संरचनात्मक भाषा विज्ञान को विकसित करने वाले सौसर, किस पर आधारित संरचना के पक्षधर थे?",
        answers: [
            { text: "विचारधारा", correct: false},
            { text: "गुणवत्ता", correct: false},
            { text: "भाषा", correct: true},
            { text: "धर्म", correct: false},
        ] 
    },

    {
        question:"1947 में 'इस्टर्न एन्थ्रोपोलाजिस्ट' का प्रकाशन शुरू हुआ। इस पत्रिका का प्रकाशन किसने शुरू किया था ?",
        answers: [
            { text: "मर्कज", correct: false},
            { text: "आर. के. मुखर्जी", correct: true},
            { text: "सीरोसिस", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"इरावती कर्वे के अध्ययन का मुख्य विषय क्या रहा है ?",
        answers: [
            { text: "पश्चिम भारत की प्रादेशिक संस्कृति की विशेषतायें", correct: false},
            { text: "नातेदारी व्याख्या", correct: false},
            { text: "जनसंख्या में प्रजातीय तत्व", correct: false},
            { text: "उपरोक्त सभी", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सामाजिक संरचना का अंग नहीं है ?",
        answers: [
            { text: "सामाजिक विचार", correct: false},
            { text: "सामाजिक समस्याएँ", correct: false},
            { text: "सामाजिक प्रतिमान", correct: false},
            { text: "व्यक्तियों द्वारा ग्रहण किये गए पद एवं भूमिकाएं", correct: true},
        ] 
    },

    {
        question:"'द लिनांजिनोलॉडी आल द सोशल वर्ल्ड' पुस्तक के लेखक कौन हैं ?",
        answers: [
            { text: "अल्फ्रेड शुद्ध", correct: true},
            { text: "जे डेरिजा", correct: false},
            { text: "पीटर", correct: false},
            { text: "बर्गर", correct: false},
        ] 
    },

    {
        question:"मर्टन के अनुसार विचलन का अर्थ वह व्यवहार-",
        answers: [
            { text: "डी अस्वीकार होता है", correct: false},
            { text: "जो सात्मीकरण होता है", correct: true},
            { text: "जो प्रतीकात्मक होता है", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"टॉलकॉट पारसन्स के अनुसार, अनुकूलन, लक्ष्य प्राप्ति एकीकरण व तनाव प्रबंधन है -",
        answers: [
            { text: "प्रकार्यात्मक आवश्यकता", correct: true},
            { text: "अप्रकार्यात्मक पूर्तियाँ", correct: false},
            { text: "सार्वभौम", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"किस विद्वान ने प्रकार्यवादी विश्लेषण में तीन अन्तः सम्बन्धित अभिस्थापनाओं का उल्लेख किया है ?",
        answers: [
            { text: "वेबर ने", correct: false},
            { text: "मार्क्स ने", correct: false},
            { text: "मर्टन ने", correct: true},
            { text: "पारसन्स ने", correct: false},
        ] 
    },

    {
        question:"'संरचना और प्रकार्य की अवधारणा का प्रयोग उसी समय संभव है जब समाज एवं जीवित सावयव की समानता को मान लिया जाए' यह कथन किस विद्वान का है -",
        answers: [
            { text: "प्रकार्य", correct: true},
            { text: "कोडार", correct: false},
            { text: "श्री निवास", correct: false},
            { text: "वेबर", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से किसने यह तर्क दिया है कि सभी संरचनाएँ सामाजिक प्रणाली के कार्यकरण के लिए अपरिहार्य नहीं है ?",
        answers: [
            { text: "सी. के. लेवी", correct: false},
            { text: "सिलेम", correct: false},
            { text: "मर्टन", correct: true},
            { text: "आर. फार्थ", correct: false},
        ] 
    },

    {
        question:"किसने अफ्रीकी जनजातियों - चोवताह और ओमाह की नातेदारी प्रणाली की संरचना का अध्ययन किया है ?",
        answers: [
            { text: "एम. एन. लिपसेट", correct: false},
            { text: "सी. एच. झूले", correct: false},
            { text: "रेडक्लिफ ब्राउन", correct: true},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"वर्तमान समय के समाजशास्त्र से हमें किस प्रकार का प्रकार्यवाद देखने को मिलता है ?",
        answers: [
            { text: "पारिवारिक प्रकार्यवाद", correct: false},
            { text: "धार्मिक प्रकार्यवाद", correct: false},
            { text: "अर्थपूर्ण प्रकार्यवाद", correct: false},
            { text: "संरचनात्मक प्रकार्यवाद", correct: true},
        ] 
    },

    {
        question:"आदर्शहीनता या एनोमी (Anomie) की अवधारणा का प्रतिपादन किस समाजशास्त्री के द्वारा किया गया ?",
        answers: [
            { text: "गिन्सवर्ण", correct: false},
            { text: "राबर्ट के. मर्टन", correct: true},
            { text: "मैक्स वेबर", correct: false},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"किस समाजशास्त्री ने चार्ल्स डार्विन के प्राणीशास्त्री उ‌द्विकास के सिद्धांत के आधार पर सामाजिक प्रकार्य के संबंध में सर्वप्रथम बतलाया है ?",
        answers: [
            { text: "श्री निवास", correct: false},
            { text: "राबर्ट के. मर्टन", correct: false},
            { text: "मेरियम डी. लेवी", correct: false},
            { text: "हरबर्ट स्पेन्सर", correct: true},
        ] 
    },

    {
        question:"अनुकुलनशील कार्य (Function) की अवधारणा किस समाजशास्त्री द्वारा प्रतिपादित की गई ?",
        answers: [
            { text: "सी. राईट मिल्स", correct: false},
            { text: "मैलिनोवस्की", correct: true},
            { text: "मेरियम डी. लेवी", correct: false},
            { text: "कॉर्क्स", correct: false},
        ] 
    },

    {
        question:"किस मानव विज्ञानी ने केवल सामाजिक संरचन विकसित की बल्कि विनियम का संरचनावारी सिद्धांत भी प्रतिपादित किया ?",
        answers: [
            { text: "टोबो", correct: true},
            { text: "कॉम्ते", correct: false},
            { text: "दुर्खीम", correct: false},
            { text: "लेवी स्ट्रॉस", correct: false},
        ] 
    },

    {
        question:"किस प्रक्रिया के द्वारा समूह के सम्बन्ध टूट जाते हैं, उसे इलियट एवं मैरिल ने किस नाम से पुकारा है ?",
        answers: [
            { text: "सामान्य विघटन            ", correct: false},
            { text: "धार्मिक स्थान", correct: false},
            { text: "सामाजिक विघटन", correct: true},
            { text: "उपरोक्त सभी", correct: false},
        ] 
    },

    {
        question:"संस्कृति की निम्नलिखित अवस्थाओं में से टैंगनी का के ओल्डूवर्ड के बटिया-औजार जो प्लीस्टोसीन युग की हस्त कुल्हाड़ियों से भिन्न है, किस अवस्था से संबंधित है ?",
        answers: [
            { text: "मूस्टेरियम", correct: true},
            { text: "सम्मिश्रण", correct: false},
            { text: "यांत्रिक ओर सावयवी", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"किसने कहा कि, 'हम अपने समाज के साथ अपने सुझाव को नहीं पा सकते, तो हम संस्कृति के आयात की खोज भी नहीं कर सकते हैं ?",
        answers: [
            { text: "बार्दियू", correct: false},
            { text: "मीड", correct: false},
            { text: "गीर्ट्ज", correct: false},
            { text: "विटगेन्स्टाइन", correct: true},
        ] 
    },

    {
        question:"'सर्वाधिकारवाद' के बढ़ते खतरे के सामने 'लोकतंत्र' को सुरक्षित रखने के लिए क्या जरूरी है ?",
        answers: [
            { text: "धर्म", correct: false},
            { text: "शिक्षा", correct: false},
            { text: "परिवार", correct: false},
            { text: "अनुप्रमाणित शिक्षा", correct: true},
        ] 
    },

    {
        question:"सामाजिक परिवर्तन निम्न में से कौन नहीं चाहता है ?",
        answers: [
            { text: "हिन्दू धर्म", correct: false},
            { text: "मुस्लिम धर्म", correct: false},
            { text: "संथाल", correct: false},
            { text: "राजनीतिज्ञ लोग", correct: true},
        ] 
    },

    {
        question:"अलौकिता से किस धर्म का संबंध है ?",
        answers: [
            { text: "संथाल", correct: false},
            { text: "पारसी", correct: false},
            { text: "मुस्लिम", correct: true},
            { text: "ये सभी", correct: false},
        ] 
    },

    {
        question:"एक महत्वपूर्ण अवधारणा 'समाज' किसके द्वारा प्रतिपादित की गई है ?",
        answers: [
            { text: "मीड", correct: true},
            { text: "वेबर", correct: false},
            { text: "मैक्स", correct: false},
            { text: "श्री निवास", correct: false},
        ] 
    },

    {
        question:"उस समाजशास्त्री का नाम बताइए जिसमें समूह का वर्गीकरण 'अन्तः समूह' तथा बाह्य-समूह श्रेणिय में किया है ?",
        answers: [
            { text: "भारत", correct: false},
            { text: "अमेरिका", correct: true},
            { text: "दिल्ली", correct: false},
            { text: "चीन", correct: false},
        ] 
    },

    {
        question:"आत्म के विकास में मीड ने कितने स्तर बत हैं ?",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "0", correct: false},
            { text: "3", correct: true},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 