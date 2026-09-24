const categories = [
{id:'tops',name:'الملابس العلوية والسفلية',items:['بلوزة','قميص','توب','كورسيه','بلوفر','هودي','بنطلون الجينز','سويت شيرت','بودي سوت','تونيك','كاميسول','التوب القصير','بنطلون قماش','بنطلون واسع','ليجنز','برمودا','شورت','تنورة','جيب شورت']},
{id:'dresses',name:'الفساتين والقطع المتصلة',items:['فستان كاجوال','فستان سهرة','فستان الزفاف','فستان كوكتيل','فستان ماكسي','جمبسوت','رومبر','سالوبيت']},
{id:'outer',name:'الملابس الخارجية',items:['جاكيت','بليزر','كارديجان','روب','معطف طويل','جاكيت منفوخ','باركا','شال','بونشو']},
{id:'sleep',name:'ملابس النوم والداخلية',items:['بجامة وقميص نوم','بيبي دول','طقم استرخاء','حمالة صدر','سراويل داخلية','لانجيري','كولون','مشد للجسم']},
{id:'sport',name:'الملابس الرياضية والسباحة',items:['طقم رياضي','مايوه','بكيني','كاش مايوه','بوركيني','بنطلون رياضة']},
{id:'traditional',name:'الملابس التقليدية والمحافظة',items:['عباءة','جلابية','اسدال صلاة','الحجاب','تونيك']}
];
const common={
style:['أنيقة','كلاسيكية','راقية','سمارت كاجوال','شبه رسمي','كاجوال','لطيفة','بوهو','فينتج','مونوكروم','مينيمال','رومانسي','درامي'],
pattern:['سادة','مخطط','زهور','هندسي','تجريدي','كاروهات','تارتان','باروكي','بيزلي','استوائية','زيجزاج','نقاط','قلوب','نجوم','فراشات','هندسة لونية','حيوانات','رخامي','تاي داي','تمويه','كرتوني','غوثيك','شعار','رخام فاخر'],
fit:['منتظم','واسع','أوفر سايز','ضيق ومحدد للجسم','مفصل على الجسم','فضفاض'],
neck:['بيتر بان','كشكشة','ربطة','دائرية','كول درابيه','قطرة','ماندرين','V','قارب/صابرينا','جوهرة','غربي','بحري','مربعة','أوف شولدر','قلب','كوين آن','V عميق','هالتر','أحزمة رفيعة','بدون حمالات','كتف واحد','غير متماثلة','تشوكر','عالية','موك نك','U','ياقة قميص','بولو'],
sleeve:['عادي','بات وينغ','كتف بارد','بيشوب','واسع','عباءة','كيمونو','طبقات','ضيق عند المعصم','جرس','بالون/منفوخ','كاب','ملاك','بتلة/توليب','فراشة','فتحة جانبية','مشقوق','ملفوف'],
sleeveLen:['طويل','عند المعصم','ثلاثة أرباع','قصير','نصف كم','بدون أكمام','عند الكتف','فوق الكوع','تحت الكوع'],
length:['قصير','منتظم','متوسط','ميدي','ماكسي','فوق الركبة','عند الركبة','تحت الركبة','منتصف الساق','عند الكاحل','مقصر'],
waist:['خصر مرتفع','خصر منخفض','خصر متوسط','خصر غير متماثل','خصر مطاطي','رباط','بابرباغ','مطاط عريض','كورسيه','بدون خصر'],
leg:['مستقيم','سكيني','واسع','بوت كت','مفصل/تيبر','كارغو','فضفاض','مستقيم واسع','A-line','قلم رصاص','حورية البحر'],
fabric:['قطن','بوليستر','كتان','حرير','فيسكوز/رايون','ليوسيل','أسيتات','شيفون','ساتان','دانتيل','تفتا','أورغانزا','كريب','تول','صوف','كشمير','ألباكا','موهير','أكريليك','دنيم','فلانيل','بوبلين','نيوبرين','بروكار','جاكار','مخمل','جلد','جلد صناعي','سويد','تويد','جاباردين','كوردروي','جيرسي','ريب نِت','مودال','إيلاستان','نايلون'],
stretch:['غير مرن','مرونة خفيفة','مرونة متوسطة','مرونة عالية'],
color:['أسود','أبيض','عاجي/كريمي','رمادي فاتح','رمادي فحمي','بيج','نيود','كاميل','بني شوكولاتة','بني كستنائي','أحمر','مرجاني','قرمزي','عنابي/نبيذي','فوشيا','وردي فاتح','وردي غباري','سلمون','أزرق كحلي','نيلي','أزرق ملكي','أزرق كهربائي','سماوي','أزرق بيبي','تركوازي','تيال','بنفسجي','لافندر','ليلكي','باذنجاني','أخضر زيتوني','زمردي','نعناعي','فستقي','مريمي','كاكي','أصفر ليموني','خردلي','برتقالي','مشمشي','نحاسي','باستيل','نيون','ذهبي معدني','فضي معدني','برونزي'],
details:['جيوب','جيوب وهمية','كارغو','أزرار','أزرار مخفية','أزرار ذهبية','سحاب','سحاب مزدوج','أحزمة','فيونكات','مطاط مجمع','خصر مرتفع','خصر كورسيه','كشكش','دانتيل','شفاف','حواف خام','لفّ','طبقات','ثقوب زخرفية','تطريز','شرائط متباينة','خطوط جانبية','كسرات','شقوق','رقع','زهور ثلاثية الأبعاد','جاكار','حلقات وسلاسل','أبازيم','مسامير معدنية','خياطة ظاهرة','خرز','لؤلؤ','أحجار لامعة','ترتر','شراريب','أكتاف مبطنة','ياقة قابلة للإزالة','بطانة','تفاصيل كوب','تفصيل دعم V','فرو متباين','قطعة 2 في 1']
};
const base={top:['style','pattern','fit','neck','sleeve','sleeveLen','fabric','stretch','color','details'],bottom:['style','pattern','fit','waist','length','leg','fabric','stretch','color','details'],dress:['style','pattern','fit','neck','sleeve','sleeveLen','length','waist','fabric','stretch','color','details'],outer:['style','pattern','fit','neck','sleeve','sleeveLen','length','fabric','stretch','color','details'],sleep:['style','pattern','fit','neck','sleeve','sleeveLen','length','fabric','stretch','color','details'],inner:['style','pattern','fit','neck','length','fabric','stretch','color','details'],sport:['style','pattern','fit','neck','sleeve','sleeveLen','length','fabric','stretch','color','details'],traditional:['style','pattern','fit','neck','sleeve','sleeveLen','length','fabric','color','details']};
const kind={};
Object.assign(kind,{بلوزة:'top',قميص:'top',توب:'top',كورسيه:'top',بلوفر:'top',هودي:'top',سويت_شيرت:'top',بودي_سوت:'top',تونيك:'top',كاميسول:'top',التوب_القصير:'top',بنطلون_الجينز:'bottom',بنطلون_قماش:'bottom',بنطلون_واسع:'bottom',ليجنز:'bottom',برمودا:'bottom',شورت:'bottom',تنورة:'bottom',جيب_شورت:'bottom'});
['بنطلون الجينز','بنطلون قماش','بنطلون واسع','ليجنز','برمودا','شورت','تنورة','جيب شورت','بنطلون رياضة'].forEach(x=>kind[x]='bottom');
['فستان كاجوال','فستان سهرة','فستان الزفاف','فستان كوكتيل','فستان ماكسي','جمبسوت','رومبر','سالوبيت'].forEach(x=>kind[x]='dress');
['جاكيت','بليزر','كارديجان','روب','معطف طويل','جاكيت منفوخ','باركا','شال','بونشو'].forEach(x=>kind[x]='outer');
['بجامة وقميص نوم','بيبي دول','طقم استرخاء'].forEach(x=>kind[x]='sleep');
['حمالة صدر','سراويل داخلية','لانجيري','كولون','مشد للجسم'].forEach(x=>kind[x]='inner');
['طقم رياضي','مايوه','بكيني','كاش مايوه','بوركيني','بنطلون رياضة'].forEach(x=>kind[x]='sport');
['عباءة','جلابية','اسدال صلاة','الحجاب'].forEach(x=>kind[x]='traditional');
const labels={style:'أسلوب التصميم',pattern:'النقشة',fit:'نوع الشكل والقصة',neck:'خط العنق والياقة',sleeve:'نوع الأكمام',sleeveLen:'طول الأكمام',length:'الطول',waist:'نوع الخصر',leg:'نوع القصّة/الساق',fabric:'نوع القماش والتكوين',stretch:'درجة مرونة القماش',color:'اللون ودرجته',details:'التفاصيل والإضافات'};
let state={screen:'categories',category:null,garment:null,questions:[],index:0,answers:{}};
const content=document.getElementById('content'),backBtn=document.getElementById('backBtn');
const esc=s=>String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
function imageSVG(name){let h=0;for(const c of name)h=(h*31+c.charCodeAt(0))%360;const hue=h, type=kind[name]||'top';let shape= type==='dress'?'M120 40 Q100 80 105 135 L55 260 Q120 285 185 260 L135 135 Q140 80 120 40Z':type==='bottom'?'M78 55 L112 55 L118 165 L92 265 L60 265 L78 165Z M128 55 L162 55 L180 165 L180 265 L148 265 L118 165Z':'M75 55 Q120 35 165 55 L205 130 L165 150 L150 100 L150 260 L90 260 L90 100 L75 150 L35 130Z'; return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${hue} 25% 25%)"/><stop offset="1" stop-color="hsl(${(hue+35)%360} 45% 65%)"/></linearGradient></defs><rect width="240" height="300" fill="#f4eee3"/><circle cx="190" cy="45" r="90" fill="hsl(${hue} 35% 85%)" opacity=".55"/><path d="${shape}" fill="url(#g)" stroke="#8b6d39" stroke-width="4"/><path d="M55 135 Q120 170 185 135" fill="none" stroke="#e9d49b" stroke-width="5" opacity=".8"/><text x="120" y="286" text-anchor="middle" font-family="Arial" font-size="14" fill="#5d4b31">${name}</text></svg>`)}`}
function render(){backBtn.style.visibility=state.screen==='categories'?'hidden':'visible'; if(state.screen==='categories')renderCategories();else if(state.screen==='garments')renderGarments();else if(state.screen==='questions')renderQuestion();else renderSummary();}
function renderCategories(){content.innerHTML=`<section class="hero"><div class="eyebrow">مرحبًا بك في مساحة التصميم</div><h1>صمم رداءك</h1><p>ابنِ قطعتك خطوة بخطوة، من القصة والياقة إلى القماش واللون والتفاصيل.</p></section><h2 class="section-title">اختر فئة</h2><div class="grid">${categories.map(c=>`<button class="category-card" onclick="selectCategory('${c.id}')"><span>${c.name}</span><small>${c.items.length} قطعة</small></button>`).join('')}</div>`}
function selectCategory(id){state.category=categories.find(c=>c.id===id);state.screen='garments';render()}
function renderGarments(){content.innerHTML=`<div class="page-heading"><div><div class="eyebrow">${state.category.name}</div><h2 class="section-title">اختر القطعة</h2></div><span class="count">${state.category.items.length} قطعة</span></div><div class="grid garment-grid">${state.category.items.map(name=>`<button class="garment-card" onclick="selectGarment('${name.replaceAll("'","\\'")}')"><div class="garment-img"><img src="${imageSVG(name)}" alt="${esc(name)}"></div><div class="garment-name">${name}</div></button>`).join('')}</div>`}
function selectGarment(name){state.garment=name;const k=kind[name]||'top';state.questions=base[k].map(key=>({key,label:labels[key],options:common[key]}));state.index=0;state.answers={};state.screen='questions';render()}
function renderQuestion(){const q=state.questions[state.index],pct=Math.round((state.index/state.questions.length)*100);content.innerHTML=`<div class="question-wrap"><div class="question-head"><span>تصميم ${state.garment}</span><b>${state.index+1}/${state.questions.length}</b></div><div class="progress"><span style="width:${pct}%"></span></div><div class="q-number">اختر إجابة واحدة للمتابعة</div><h1 class="question">${q.label}</h1><div class="options">${q.options.map(o=>`<button class="option" onclick="answer('${q.key}','${o.replaceAll("'","\\'")}')">${o}</button>`).join('')}</div></div>`}
function answer(key,value){state.answers[key]=value;if(state.index<state.questions.length-1)state.index++;else state.screen='summary';render()}
function renderSummary(){const rows=Object.entries(state.answers).map(([k,v])=>`<div class="spec"><b>${labels[k]}</b><span>${esc(v)}</span></div>`).join('');content.innerHTML=`<div class="summary"><div class="eyebrow">المعاينة النهائية</div><h2>${esc(state.garment)}</h2><p class="summary-sub">هذه هي مواصفات التصميم التي اخترتها.</p><div class="preview-card"><img src="${imageSVG(state.garment)}" alt="${esc(state.garment)}"><div><strong>${esc(state.garment)}</strong><span>جاهز للإنشاء بالذكاء الاصطناعي</span></div></div><div class="spec-list">${rows}</div><button class="create-btn" onclick="createDesign()">✨ إنشاء التصميم</button><div id="result"></div></div>`}
async function createDesign(){
  const result=document.getElementById('result');
  const button=document.querySelector('.create-btn');
  const specs=Object.entries(state.answers).map(([k,v])=>`${labels[k]}: ${v}`).join('، ');
  const prompt=`أنشئ صورة أزياء واقعية واحترافية لقطعة ${state.garment}. التزم بدقة بالمواصفات التالية: ${specs}. أظهر القطعة كاملة وواضحة، بتفاصيل دقيقة للقصة والخياطة والخامة والنقشة واللون والإضافات. اجعل التصميم يبدو كقطعة أزياء حقيقية قابلة للتنفيذ، بتنسيق تصوير أزياء احترافي وإضاءة استوديو ناعمة وخلفية بسيطة وأنيقة. لا تضف أي كتابة أو شعارات أو علامات مائية إلى الصورة.`;
  if(button){button.disabled=true;button.innerHTML='⏳ جاري إنشاء التصميم...';}
  result.innerHTML=`<div class="result loading"><div class="spinner"></div><h3>جاري إنشاء تصميمك...</h3><p>الذكاء الاصطناعي يحوّل المواصفات التي اخترتها إلى صورة.</p></div>`;
  try{
    const response=await fetch('/api/generate-image',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt})});
    const data=await response.json().catch(()=>({}));
    if(!response.ok) throw new Error(data.error||'تعذر إنشاء الصورة.');
    if(!data.image) throw new Error('لم تصل الصورة.');
    result.innerHTML=`<div class="result result-image"><h3>✨ تم إنشاء تصميمك</h3><img class="generated-image" src="${data.image}" alt="التصميم الذي تم إنشاؤه"><div class="result-actions"><button class="secondary-btn" onclick="downloadDesign()">حفظ الصورة</button><button class="secondary-btn" onclick="createDesign()">إعادة الإنشاء</button></div></div>`;
    window.generatedDesign=data.image;
  }catch(error){
    result.innerHTML=`<div class="result error"><div class="result-icon">!</div><h3>تعذر إنشاء الصورة</h3><p>${esc(error.message||'حدث خطأ غير متوقع.')}</p><p class="hint">إذا ظهر خطأ المفتاح، تأكد أن OPENAI_API_KEY متاح للـ Functions في Vercel ثم أعد النشر.</p><button class="secondary-btn" onclick="createDesign()">حاول مرة أخرى</button></div>`;
  }finally{if(button){button.disabled=false;button.innerHTML='✨ إنشاء التصميم';}}
}
function downloadDesign(){if(!window.generatedDesign)return;const a=document.createElement('a');a.href=window.generatedDesign;a.download='tasmeem-ridaak.png';a.click()}
backBtn.onclick=()=>{if(state.screen==='garments')state.screen='categories';else if(state.screen==='questions')state.screen='garments';else if(state.screen==='summary')state.screen='questions';render()};
setTimeout(()=>{const el=document.getElementById('brandText');el.textContent='صمم رداءك';el.classList.add('brand-reveal')},120);
setTimeout(()=>{document.getElementById('splash').classList.add('hidden');document.getElementById('main').classList.remove('hidden');render()},2200);
Object.assign(window,{selectCategory,selectGarment,answer,createDesign,downloadDesign});
