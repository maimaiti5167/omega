// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import { Button, Input, Form, message, Rate, Modal, DatePicker, TimePicker } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const { TextArea } = Input;
const App: React.FC = () => {
const [currentLang, setCurrentLang] = useState<'ug' | 'zh' | 'en'>('ug');
const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
const [selectedService, setSelectedService] = useState<string | null>(null);
const [form] = Form.useForm();
const languages = [
{ code: 'ug', name: 'ئۇيغۇرچە' },
{ code: 'zh', name: '中文' },
{ code: 'en', name: 'English' }
];
const services = [
{
title: 'تور بېكەت لايىھەلەش',
price: '20,000 - 100,000',
duration: '15-30 كۈن',
image: 'https://public.readdy.ai/ai/img_res/de928d4a5214c32a8a4ce444dd34f374.jpg',
process: ['تەلەپ ئانالىزى', 'لايىھە تۈزۈش', 'تەرەققىي قىلدۇرۇش', 'سىناق قىلىش', 'تور بېكەتنى ئېچىش']
},
{
title: 'ئەپ لايىھەلەش',
price: '50,000 - 200,000',
duration: '30-60 كۈن',
image: 'https://public.readdy.ai/ai/img_res/8c3df74b43aaaf3cf7feac53fc59bbed.jpg',
process: ['تەلەپ ئانالىزى', 'ئىشلەتكۈچى تەجرىبىسى لايىھەسى', 'كود يېزىش', 'سىناق قىلىش', 'ئەپ تارقىتىش']
},
{
title: 'ماركا لايىھەلەش',
price: '15,000 - 80,000',
duration: '10-20 كۈن',
image: 'https://public.readdy.ai/ai/img_res/867f55e83c95a530d0781db5d6ff3970.jpg',
process: ['ماركا ئانالىزى', 'لوگو لايىھەلەش', 'رەڭ تاللاش', 'ھۆججەت لايىھەلەش', 'ماركىنى تارقىتىش']
},
{
title: 'مەھسۇلات ئورىمىسى لايىھەسى',
price: '10,000 - 50,000',
duration: '7-15 كۈن',
image: 'https://public.readdy.ai/ai/img_res/af1b647e7fc46667df893cdd54726633.jpg',
process: ['بازار تەتقىقاتى', 'ئورما لايىھەسى', 'ماتېرىيال تاللاش', '3D كۆرۈنۈش', 'ئىشلەپچىقىرىش']
},
{
title: 'شەخسىي ماركا قۇرۇلۇشى',
price: '30,000 - 150,000',
duration: '20-45 كۈن',
image: 'https://public.readdy.ai/ai/img_res/386ec56d79fdc83e0ecdd68a656f4344.jpg',
process: ['شەخسىي ئانالىز', 'ماركا ئىستراتېگىيەسى', 'تاراتقۇ پىلانى', 'مەزمۇن ئىشلەپچىقىرىش', 'تەسىر كۈچى ئۆلچەش']
}
];
const testimonials = [
{
name: 'ئابدۇكېرىم مەمتىمىن',
company: 'تەڭرىتاغ تېخنىكا شىركىتى',
rating: 5,
comment: 'ئۇلارنىڭ خىزمىتىدىن ناھايىتى رازى بولدۇق. پىشقەدەم خىزمەت گۇرۇپپىسى بىزنىڭ تەلەپلىرىمىزنى تولۇق چۈشەندى.'
},
{
name: 'گۈلباھار ئابلىز',
company: 'يىپەك يولى سودا شىركىتى',
rating: 5,
comment: 'خىزمەت سۈپىتى يۇقىرى، باھاسى مۇۋاپىق. كەلگۈسىدە يەنە ھەمكارلىشىمىز.'
},
{
name: 'ئالىمجان تۇرسۇن',
company: 'قەشقەر يېمەكلىك شىركىتى',
rating: 5,
comment: 'بىزنىڭ تور بېكىتىمىز ئۇلارنىڭ ياردىمى بىلەن تېخىمۇ گۈزەل ۋە ئىشلىتىشكە قۇلاي بولدى.'
}
];
const handleConsultSubmit = (values: any) => {
message.success('مەسلىھەتلىشىش تەلىپىڭىز يوللاندى!');
setIsConsultModalOpen(false);
form.resetFields();
};
return (
<div className="min-h-screen bg-white" dir="rtl">
{/* Header */}
<header className="h-20 flex items-center justify-between px-8 border-b border-gray-100 max-w-[1440px] mx-auto">
<a href="https://readdy.ai/home/b9503b89-ae38-4655-af29-b4c15cc7fd86/9b756153-15a9-4a95-af4e-d5bb9e33baea" data-readdy="true">
<img
src="https://static.readdy.ai/image/1fedead0a733fd83ff30e4e85f00db1f/ee3d2ea1a987135755431f33e4f984d6.png"
alt="Logo"
className="h-12"
/>
</a>
<nav className="flex items-center gap-8">
<a href="https://readdy.ai/home/b9503b89-ae38-4655-af29-b4c15cc7fd86/9b756153-15a9-4a95-af4e-d5bb9e33baea" data-readdy="true" className="text-gray-700 hover:text-blue-600 cursor-pointer">
{currentLang === 'ug' ? 'باش بەت' : currentLang === 'zh' ? '首页' : 'Home'}
</a>
<a href="#services" className="text-blue-600 font-semibold cursor-pointer">
{currentLang === 'ug' ? 'خىزمەتلىرىمىز' : currentLang === 'zh' ? '服务' : 'Services'}
</a>
<a href="#about" className="text-gray-700 hover:text-blue-600 cursor-pointer">
{currentLang === 'ug' ? 'ھەققىمىزدە' : currentLang === 'zh' ? '关于' : 'About'}
</a>
<a href="#contact" className="text-gray-700 hover:text-blue-600 cursor-pointer">
{currentLang === 'ug' ? 'ئالاقە' : currentLang === 'zh' ? '联系' : 'Contact'}
</a>
<div className="relative inline-block">
<Button
onClick={(e: React.MouseEvent) => {
const button = e.currentTarget;
const dropdown = button.nextElementSibling;
if (dropdown) {
dropdown.classList.toggle('hidden');
}
}}
className="!rounded-button whitespace-nowrap cursor-pointer flex items-center gap-2"
>
{languages.find(lang => lang.code === currentLang)?.name}
<i className="fas fa-chevron-down text-xs"></i>
</Button>
<div className="hidden absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
{languages.map(lang => (
<div
key={lang.code}
onClick={() => {
setCurrentLang(lang.code as 'ug' | 'zh' | 'en');
const dropdown = document.querySelector('.language-dropdown');
if (dropdown) {
dropdown.classList.add('hidden');
}
}}
className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-700 first:rounded-t-lg last:rounded-b-lg"
>
{lang.name}
</div>
))}
</div>
</div>
</nav>
</header>
{/* Services Detail Section */}
<section id="services" className="py-20 max-w-[1440px] mx-auto px-8">
<h2 className="text-4xl font-bold text-center mb-16">خىزمەت تەپسىلاتى</h2>
<div className="grid grid-cols-1 gap-12">
{[
  {
    title: 'تور بېكەت لايىھەلەش',
    price: '20,000 - 100,000',
    duration: '15-30 كۈن',
    image: 'https://readdy.ai/api/search-image?query=professional web design workspace with modern computer setup showing website mockups on screen clean minimal office environment&width=400&height=300&seq=20&orientation=landscape',
    process: ['تەلەپ ئانالىزى', 'لايىھە تۈزۈش', 'تەرەققىي قىلدۇرۇش', 'سىناق قىلىش', 'تور بېكەتنى ئېچىش']
  },
  {
    title: 'ئەپ لايىھەلەش',
    price: '50,000 - 200,000',
    duration: '30-60 كۈن',
    image: 'https://readdy.ai/api/search-image?query=mobile app development process visualization with modern devices and UI design elements professional workspace setup&width=400&height=300&seq=21&orientation=landscape',
    process: ['تەلەپ ئانالىزى', 'ئىشلەتكۈچى تەجرىبىسى لايىھەسى', 'كود يېزىش', 'سىناق قىلىش', 'ئەپ تارقىتىش']
  },
  {
    title: 'ماركا لايىھەلەش',
    price: '15,000 - 80,000',
    duration: '10-20 كۈن',
    image: 'https://readdy.ai/api/search-image?query=branding design workspace with modern logo designs and corporate identity materials professional design environment&width=400&height=300&seq=22&orientation=landscape',
    process: ['ماركا ئانالىزى', 'لوگو لايىھەلەش', 'رەڭ تاللاش', 'ھۆججەت لايىھەلەش', 'ماركىنى تارقىتىش']
  },
  {
    title: 'مەھسۇلات ئورىمىسى لايىھەسى',
    price: '10,000 - 50,000',
    duration: '7-15 كۈن',
    image: 'https://readdy.ai/api/search-image?query=product packaging design workspace with modern mockups and creative materials elegant minimal studio environment&width=400&height=300&seq=23&orientation=landscape',
    process: ['بازار تەتقىقاتى', 'ئورما لايىھەسى', 'ماتېرىيال تاللاش', '3D كۆرۈنۈش', 'ئىشلەپچىقىرىش']
  },
  {
    title: 'شەخسىي ماركا قۇرۇلۇشى',
    price: '30,000 - 150,000',
    duration: '20-45 كۈن',
    image: 'https://readdy.ai/api/search-image?query=personal branding strategy visualization with modern marketing materials and social media presence professional setup&width=400&height=300&seq=24&orientation=landscape',
    process: ['شەخسىي ئانالىز', 'ماركا ئىستراتېگىيەسى', 'تاراتقۇ پىلانى', 'مەزمۇن ئىشلەپچىقىرىش', 'تەسىر كۈچى ئۆلچەش']
  }
].map((service, index) => (
<div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
<div className="grid grid-cols-2 gap-8">
<div className="p-8">
<h3 className="text-2xl font-bold mb-4">{service.title}</h3>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-2">
<i className="fas fa-clock text-blue-600"></i>
<span>خىزمەت مۇددىتى: {service.duration}</span>
</div>
<div className="flex items-center gap-2">
<i className="fas fa-yuan-sign text-blue-600"></i>
<span>باھا دائىرىسى: {service.price}</span>
</div>
</div>
<div className="mb-6">
<h4 className="text-lg font-semibold mb-3">خىزمەت جەريانى:</h4>
<div className="flex items-center gap-4">
{service.process.map((step, stepIndex) => (
<div key={stepIndex} className="flex items-center">
<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
{stepIndex + 1}
</div>
<div className="mr-2">{step}</div>
{stepIndex < service.process.length - 1 && (
<div className="w-8 h-0.5 bg-blue-200 mr-2"></div>
)}
</div>
))}
</div>
</div>
<Button
type="primary"
size="large"
onClick={() => {
setSelectedService(service.title);
setIsConsultModalOpen(true);
}}
className="!rounded-button whitespace-nowrap cursor-pointer"
>
مەسلىھەتلىشىش
</Button>
</div>
<div className="h-[400px] overflow-hidden">
<img src={service.image} alt={service.title} className="w-full h-full object-cover"/>
</div>
</div>
</div>
))}
</div>
</section>
{/* Testimonials Section */}
<section className="py-20 bg-gray-50">
<div className="max-w-[1440px] mx-auto px-8">
<h2 className="text-4xl font-bold text-center mb-16">خېرىدارلارنىڭ باھاسى</h2>
<Swiper
modules={[Pagination, Autoplay]}
pagination={{ clickable: true }}
autoplay={{ delay: 3000 }}
spaceBetween={30}
slidesPerView={3}
className="testimonials-swiper"
>
{testimonials.map((testimonial, index) => (
<SwiperSlide key={index}>
<div className="bg-white p-6 rounded-lg shadow-md">
<div className="mb-4">
<Rate disabled defaultValue={testimonial.rating} />
</div>
<p className="text-gray-600 mb-4">{testimonial.comment}</p>
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
<i className="fas fa-user text-blue-600"></i>
</div>
<div>
<h4 className="font-semibold">{testimonial.name}</h4>
<p className="text-sm text-gray-500">{testimonial.company}</p>
</div>
</div>
</div>
</SwiperSlide>
))}
</Swiper>
</div>
</section>
{/* Consultation Modal */}
<Modal
title="مەسلىھەتلىشىش"
open={isConsultModalOpen}
onCancel={() => setIsConsultModalOpen(false)}
footer={null}
>
<Form form={form} onFinish={handleConsultSubmit} layout="vertical">
<Form.Item name="name" rules={[{ required: true, message: 'ئىسمىڭىزنى كىرگۈزۈڭ' }]}>
<Input placeholder="ئىسمىڭىز" />
</Form.Item>
<Form.Item name="phone" rules={[{ required: true, message: 'تېلېفون نومۇرىڭىزنى كىرگۈزۈڭ' }]}>
<Input placeholder="تېلېفون نومۇرىڭىز" />
</Form.Item>
<Form.Item name="service" initialValue={selectedService}>
<Input disabled value={selectedService} />
</Form.Item>
<Form.Item name="date" rules={[{ required: true, message: 'كۈننى تاللاڭ' }]}>
<DatePicker className="w-full" placeholder="كۈننى تاللاڭ" />
</Form.Item>
<Form.Item name="time" rules={[{ required: true, message: 'ۋاقىتنى تاللاڭ' }]}>
<TimePicker className="w-full" placeholder="ۋاقىتنى تاللاڭ" />
</Form.Item>
<Form.Item name="message">
<TextArea rows={4} placeholder="قوشۇمچە ئىزاھات" />
</Form.Item>
<Form.Item>
<Button type="primary" htmlType="submit" className="w-full !rounded-button whitespace-nowrap cursor-pointer">
يوللاش
</Button>
</Form.Item>
</Form>
</Modal>
{/* Footer */}
<footer className="bg-gray-900 text-white py-12">
<div className="max-w-[1440px] mx-auto px-8">
<div className="grid grid-cols-4 gap-8">
<div>
<h3 className="text-xl font-bold mb-4">ئالاقە ئۇچۇرى</h3>
<p>ئۈرۈمچى شەھىرى، تىيانشان رايونى</p>
<p>تېلېفون: 0991-1234567</p>
<p>ئېلخەت: info@example.com</p>
</div>
<div>
<h3 className="text-xl font-bold mb-4">تېز ئۇلانما</h3>
<ul className="space-y-2">
<li><a href="https://readdy.ai/home/b9503b89-ae38-4655-af29-b4c15cc7fd86/9b756153-15a9-4a95-af4e-d5bb9e33baea" data-readdy="true" className="hover:text-blue-400 cursor-pointer">باش بەت</a></li>
<li><a href="#services" className="hover:text-blue-400 cursor-pointer">خىزمەتلىرىمىز</a></li>
<li><a href="#about" className="hover:text-blue-400 cursor-pointer">ھەققىمىزدە</a></li>
<li><a href="#contact" className="hover:text-blue-400 cursor-pointer">ئالاقە</a></li>
</ul>
</div>
<div>
<h3 className="text-xl font-bold mb-4">ئىجتىمائىي تاراتقۇ</h3>
<div className="flex space-x-4">
<i className="fab fa-weixin text-2xl cursor-pointer"></i>
<i className="fab fa-weibo text-2xl cursor-pointer"></i>
<i className="fab fa-qq text-2xl cursor-pointer"></i>
</div>
</div>
<div>
<h3 className="text-xl font-bold mb-4">گۇۋاھنامە</h3>
<p>ICP备12345678号-1</p>
</div>
</div>
<div className="mt-8 pt-8 border-t border-gray-800 text-center">
<p>© 2025 زامانىۋى لايىھەلەش شىركىتى. بارلىق ھوقۇقلار قوغدالغان</p>
</div>
</div>
</footer>
</div>
);
};
export default App
