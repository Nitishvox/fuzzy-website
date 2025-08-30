from flask import render_template, request
from app import app

# Stock photo URLs
STOCK_PHOTOS = {
    'south_india_landscapes': [
        'https://pixabay.com/get/g0fbb06774da7b6f142607d764016e2c4f13e25da7c628777d97791d5d9070be7a3125e3d2320523b7a0d0e89ff79775a3f04896b92248483e787cdf23b27ee60_1280.jpg',
        'https://pixabay.com/get/gdc23b19188735039848381663a0c38b563892012c734e6d6bfc2069d37c9ca182d02cf6f3c0ad8b4eee3c894281b1b079aefff7edcc9298c66330f8625638e81_1280.jpg',
        'https://pixabay.com/get/gce3c6902198ae0f06827868b9a67ca14cf29357736a553353896c1660d7444a37a4bfba04eb9377a4299c809297dc50088e63a35c25e160c3d54ea7c401b97df_1280.jpg',
        'https://pixabay.com/get/g7440009805a3ad966ef410b4a79714846df123c34bc794208fd716c6041b3d63cb40c915a60e82da4e498032c1e5df294875d01ac80d648eb748e5f259baed57_1280.jpg',
        'https://pixabay.com/get/g36c874db9395d471ceaa0b29ad4d829c4a44110506234704a2e8bc84ad0d2d397f9e804c537a7111455c387c56f152140e5b8314d7c34dca45ead58fa4e04ba6_1280.jpg',
        'https://pixabay.com/get/g5f041dec3e15a0c3a28611a1b58adb4be1b98d19050522cf86b7aac8592cdef92930fa3ea8d38b3e3590b4299b8d8c65d5cd6c36b23fa8e1e33e20545a68a81f_1280.jpg',
        'https://pixabay.com/get/g10b3c0bf70254388d3e9b992952639723affa08468d86ec2f1239ae05b71861d21884727e685b2f0cb2f57b6e71b95d13c4db3fb9ceb615f8ff9ec072803cecf_1280.jpg',
        'https://pixabay.com/get/gc4886db225f1f1f1e66dddd742a2166f91e64a59b6cc1bbd8b8811c9438d995e0d2afa28c642db6a3edf41842b1d4143f2e183b20cb8a5185198e75d3e2e0a59_1280.jpg'
    ],
    'temples': [
        'https://pixabay.com/get/g439c3e6895a99f0c38ae83b8bdeb2a8f5c1b23218f23e8e3ea90798b4b00df94746b6ff42873f200ed5042ed01cf969b9309d3e05498406e61cb3b1598e0e413_1280.jpg',
        'https://pixabay.com/get/g5fce9039bedff7f22b93cac7273ff63894a478e92623ba95e67aefaacb9a81e134f66f019251d1b4814ed6b48097913f209c7e0b97dbf8cc9033e112a129062f_1280.jpg',
        'https://pixabay.com/get/g3bd9b39788b3ac5a3e9ba09d323b1048762545b3f1dae47bca4c2edea0c160ab7be3ba85be465af3ec70d34e5aa0d5906d5e4b4d0615fd2370c3382558a731ae_1280.jpg',
        'https://pixabay.com/get/g5fa7deadc13a33c8afe66987338f173b59dd30de6cfa388ff60019eed2832cfa74f4d8727b4fa6b46733f322574b3375aff6e943df8824cc7ef70ddbd7e5893f_1280.jpg',
        'https://pixabay.com/get/gb99e53dd5a16a214344073754fc844333ff50d170cf9287b002123447fe1adbea89835f8f7a5e04106d2f8c4812267e320b597fd58de15d72754d09822eee251_1280.jpg',
        'https://pixabay.com/get/ge1404a24a1cf90aa3488255cfaa768bc6c8a641e8e2f30bc2212cd88fee59a855c3175618471857b58e5b79452bf51980676ecdeb425fa3a8c48214addf21ccc_1280.jpg'
    ],
    'kerala_backwaters': [
        'https://pixabay.com/get/g1be29f6e89a3304fb238b95342af04ec273d3cd095b1d19869c95506c7b1c2aef4d92e62312263c51a66e43de9de733bd59146b2d639b3bad8cec346aea3a0f7_1280.jpg',
        'https://pixabay.com/get/gdefee4722cb6e3d5a87147ef21e4772e9ba4cc7f92aea803b5a257ec5d760c6f330a241697d8d337771b8bc1beb5f79c42e830d1654252bf6b6cb94572016b51_1280.jpg',
        'https://pixabay.com/get/g47f18a48c6ccf684e2d205a39c586fdf599ee8944e876e2262278a3f88c5eda1335f404f72ae094f58e828beeb1dd39957ea065cbe604e256020b65a2da8ea7b_1280.jpg',
        'https://pixabay.com/get/g2046366078eef20fcf7254c03a15f81a07ac65c670776ba62e516d0134c68ad6080ff3c5af064bf48c3bea224d53cef6fd1ec6f9cc994cf4f59c47231018a59f_1280.jpg'
    ],
    'goa_beaches': [
        'https://pixabay.com/get/g7244167e2e368bae0de1484199ad59353aa0d7832411473943dc881853c22da503a49daf9a31e539a27af73d7e1966efa1256e56656f76078f3eb017e2608f36_1280.jpg',
        'https://pixabay.com/get/ge02b3d6b568d5f1c2699d4dd645fa0d9236d98e8259cbbd8e5c8dcb86e0ee64182a4b7652ab343013c87ebc30f358db956a4ce7af0fd586d038012c4aeb23994_1280.jpg',
        'https://pixabay.com/get/g71bb4781912c719d92a13c80409c871a0c0e5c70dc99a17e47880d61dde104bd9e395132a9db54bb4e3ebec6e0daa17bb99ba00078f56ae2c97b8b0a440646f8_1280.jpg',
        'https://pixabay.com/get/gc34d5457a184d311409f91e52a9faf3923abc2407fc0f95d0e8fcec18fd564c2c64ff83cddf81bfb2af0a987724a4a9f61b301ce8f3a294cfa8845757a9c33c1_1280.jpg'
    ],
    'bangalore_cityscape': [
        'https://pixabay.com/get/gb45ddb486b798738329707e2021f0f27dbee064a7d6c9b783941ab90fcb5a3a2da14efbbbb9f46059a5b3c6678c54ad241a778e969dc4938e7e41e1650f9ca12_1280.jpg',
        'https://pixabay.com/get/gbf4bbbdbb0c04350150eeddd716932424e449d334162cab45df48188971322053aacf18ed409122b4a911e77628398c044c925be7eb32152676c10ebc38158b8_1280.jpg',
        'https://pixabay.com/get/g98082ccd66eb4942896ac89a30e66ed20c4b71a0dee307d6d2d2ab84aa552455c301fc8fd5efdd8345a267440bbe27522c05f64466d6030c5a5b5a0cdef7f225_1280.jpg'
    ],
    'chennai_marina': [
        'https://pixabay.com/get/g99408f40ea21be2f483fc307b430551a60cb9f0a4560f4cbda27d2eae2eb829e7ecc2f17f9911691030814638ca3df54e1174d31aa792070148b653172b78b5b_1280.jpg',
        'https://pixabay.com/get/gdb7da488eefdbd062f4976f81f97bb0c3c8fa1bdea7e6f25a0c92ed9a289d13f2dc710380f1d8ee98b2524545f2cc3bee68e813d2e9459b604d8a2812cab806b_1280.jpg',
        'https://pixabay.com/get/gf1ec41762e3e764ff664bc66739d7356430e3bb89faebe57a7f5ac36857086c5ab096f0ff0c25e5bdd3711009861bf95e914c4d39e5b85e4a8b0ddec488ce16d_1280.jpg'
    ]
}

DESTINATIONS = {
    'kerala': {
        'name': 'Kerala - God\'s Own Country',
        'description': 'Experience the serene backwaters, lush hill stations, and pristine beaches of Kerala.',
        'highlights': ['Backwater Cruises', 'Hill Stations', 'Ayurveda Spas', 'Traditional Cuisine'],
        'hero_image': STOCK_PHOTOS['kerala_backwaters'][0],
        'gallery': STOCK_PHOTOS['kerala_backwaters']
    },
    'goa': {
        'name': 'Goa - Pearl of the Orient',
        'description': 'Discover the golden beaches, vibrant nightlife, and Portuguese heritage of Goa.',
        'highlights': ['Golden Beaches', 'Water Sports', 'Colonial Architecture', 'Beach Shacks'],
        'hero_image': STOCK_PHOTOS['goa_beaches'][0],
        'gallery': STOCK_PHOTOS['goa_beaches']
    },
    'karnataka': {
        'name': 'Karnataka - Land of Palaces',
        'description': 'Explore the royal heritage, modern cities, and architectural wonders of Karnataka.',
        'highlights': ['Mysore Palace', 'Hampi Ruins', 'Bangalore Gardens', 'Coffee Plantations'],
        'hero_image': STOCK_PHOTOS['bangalore_cityscape'][0],
        'gallery': STOCK_PHOTOS['bangalore_cityscape'] + STOCK_PHOTOS['temples'][:2]
    },
    'tamil_nadu': {
        'name': 'Tamil Nadu - Land of Temples',
        'description': 'Witness the magnificent temples, rich culture, and coastal beauty of Tamil Nadu.',
        'highlights': ['Ancient Temples', 'Marina Beach', 'Classical Dance', 'Temple Architecture'],
        'hero_image': STOCK_PHOTOS['chennai_marina'][0],
        'gallery': STOCK_PHOTOS['chennai_marina'] + STOCK_PHOTOS['temples'][:3]
    }
}

@app.route('/')
def index():
    featured_destinations = list(DESTINATIONS.values())[:4]
    hero_images = STOCK_PHOTOS['south_india_landscapes'][:3]
    return render_template('index.html', 
                         destinations=featured_destinations, 
                         hero_images=hero_images,
                         stock_photos=STOCK_PHOTOS)

@app.route('/kerala')
def kerala():
    return render_template('kerala.html', destination=DESTINATIONS['kerala'])

@app.route('/goa')
def goa():
    return render_template('goa.html', destination=DESTINATIONS['goa'])

@app.route('/karnataka')
def karnataka():
    return render_template('karnataka.html', destination=DESTINATIONS['karnataka'])

@app.route('/tamil_nadu')
def tamil_nadu():
    return render_template('tamil_nadu.html', destination=DESTINATIONS['tamil_nadu'])

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/contact', methods=['POST'])
def contact_post():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    
    # In a real application, you would process this data
    # For now, we'll just redirect back with a success message
    return render_template('contact.html', success=True)
