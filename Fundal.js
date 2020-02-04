function seteazaFundal(){
			var data_curenta = new Date();
			var Luna = data_curenta.getMonth() + 1;
			var Zi = data_curenta.getDate();
			var sir;
			sir = "Roses/" + Luna + ".jpg";
			document.body.style.backgroundImage = "url('" + sir + "')";
			var Mesaje = new Array();
			var NumarZile = new Array();
			NumarZile[1] = 31; NumarZile[3] = 31; NumarZile[5] = 31; NumarZile[7] = 31; NumarZile[8] = 31; NumarZile[10] = 31; NumarZile[12] = 31;
			NumarZile[2] = 29;
			NumarZile[4] = 30; NumarZile[6] = 30; NumarZile[9] = 30; NumarZile[11] = 30;
			
			Mesaje[1] = '"' + "Oricat de greu mi-ar fi, niciodata nu o sa renunt la tine." + '"';
			Mesaje[2] = '"' + "You and I just have a dream/To find our love a place where we can hide away" + '"';
			Mesaje[3] = '"' + "I try to picture me without you but I can't; cause we could be immortals"+ '"';
			Mesaje[4] = '"' + "I love you; to the moon and back"+ '"';
			Mesaje[5] = "Iti multumesc pentru faptul ca in fiecare zi ma faci sa fiu mai bun.";
			Mesaje[6] = "I love you. Today. Tomorrow. Always. Forever.";
			Mesaje[7] = '"-De ce tremuri atat de tare?" "-Pentru ca esti aici. Langa mine."';
			Mesaje[8] = '"Nu stiu unde duce drumul meu, dar merg mai bine cand te tin de mana."';
			Mesaje[9] = '"Te iubesc si te voi iubi toata viata, iar daca si dupa moarte oamenii iubesc, atunci te voi iubi pentru totdeauna."';
			Mesaje[10] = "Abia astept ca atunci cand voi spune ca ma duc acasa, de fapt, sa insemne ca vin spre tine.";
			Mesaje[11] = "Fiecare imbratisare de la tine e izvorul meu de energie.";
			Mesaje[12] = '"' + "I'll vanquish any foe because you're mine" + '"';
			Mesaje[13] = "O privire in ochii tai - si a fost suficient ca sa ma indragostesc de tine.";
			Mesaje[14] = "Intotdeauna o sa abia-astept sa te iau in brate, sa te mangai pe obrajor si sa-ti simt prezenta.";
			Mesaje[15] = "Chiar daca nu esti mereu langa mine, ochii mei te vor ocroti pretutindeni.";
			Mesaje[16] = "Tu esti singura fata care a ales sa fie alaturi de mine.";
			Mesaje[17] = "Esti singura fata care a vazut ceva dincolo de zidul rece pe care-l afisam.";
			Mesaje[18] = 'Esti cel mai frumos lucru care mi s-a intamplat vreodata si care inca mi se intampla de fiecare data cand imi spui "Buna dimineata".';
			Mesaje[19] = '"' + "Yes of course/ My little hoorse." + '"';
			Mesaje[20] = "Intotdeauna ai stiut sa ma faci sa zambesc cand cerul mintii mele era acoperit de nori.";
			Mesaje[21] = "Esti fata care mi-a aparut de cele mai multe ori in vis."
			Mesaje[22] = "Abia astept ca in fiecare dimineata sa ma trezesc langa tine si ca in fiecare seara sa te iau in brate de noapte buna.";
			Mesaje[23] = '"' + "Give me your heart and I hold you close, /And I will love you till the day I die." + '"';
			Mesaje[24] = '"'+ "Nopti la rand port in gand chipul si ora cand/ Am sa ma intorc la tine."+ '"';
			Mesaje[25] = '"'+ "I was born from the sound of the strings/ For someone to give everything/ To be a song just for your feeling" +'"';
			Mesaje[26] = '"' + "Hear my voice/ Sing with the tide/ My love will never die" + '"';
			Mesaje[27] = "Esti singura fata care mi-a dat prima mesaj dupa o zi in care am vorbit cu ea.";
			Mesaje[28] = '"' + "Et si tu n'existais pas/ Dis-moi pourquoi j'existerai?" + '"';
			Mesaje[29] = "Te ador pe zi ce trece tot mai mult.";
			Mesaje[30] = "In fiecare zi ne apropiem din ce in ce mai mult unul de celalalt.";
			Mesaje[31] = "Aminteste-ti ca sunt schimbat pentru totdeauna de ceea ce insemni pentru mine.";
			Mesaje[32] = "Sunt recunoscator pentru bucatica din inima ta ce se afla in mine.";
			Mesaje[33] = "Fiecare zi este o noua pagina din romanul iubirii noastre.";
			Mesaje[34] = "Nu esti singura. Intotdeauna sunt aici pentru tine.";
			Mesaje[35] = "Chiar daca uneori nu pare, de fiecare data caut cea mai buna solutie astfel incat amandurora sa ne fie bine.";
			Mesaje[36] = '"' + "You're the best!/ Around!/ Nothing's gonna ever keep you down!" + '"';
			Mesaje[37] = "Tu esti raza de soare care imi incalzeste in fiecare zi sufletul.";
			Mesaje[38] = "05 februarie 2018 - cea mai frumoasa zi din viata mea.";
			Mesaje[39] = "21 ianuarie 2018 - imi amintesc si acum de ochii nostri care cautau timizi sa se cunoasca mai bine.";
			Mesaje[40] = "Imi place cum numai din modul in care scriem mesajele ne dam seama de ceea ce simtim la momentul acela.";
			Mesaje[41] = 'De fiecare data cand esti trista sa-ti amintesti de "Salut, Clara! Ce faci?"-ul pe care ti l-am povestit in Carturesti.';
			Mesaje[42] = "De fiecare data cand te simti singura, priveste spre cer. Stelele sunt ochii prin care te privesc cand nu sunt langa tine.";
			Mesaje[43] = "Mi-ar placea sa simti de fiecare data cand sunt cu gandul la tine.";
			Mesaje[44] = "Imi cer scuze pentru toate datile in care te-am facut sa te simti un om rau.";
			Mesaje[45] =  '"' + "Sometimes, even when you get knocked down, you can still win." + '"';
			Mesaje[46] = '"' + "Keep your eyes on the stars and the feet on the ground." + '"';
			Mesaje[47] = '"' + "Face up, make your stand/ And realize you're living in the golden years!" + '"';
			Mesaje[48] = '"' + "So understand/ Don't waste your time always searching for those wasted years!" + '"';
			Mesaje[49] = '"' + "So close, no matter how far/ Couldn't be much more from the heart" + '"';
			Mesaje[50] = '"' + "I'm just a speck inside your hand/ You came and made me who I am" + '"';
			Mesaje[51] = '"' + "The first time I ever saw you/ You had that far-away look in your eyes/ And the the Heaven's eyes shined down upon you/ And the whole room filled up with light" + '"';
			Mesaje[52] = '"' + "When you are near, everything's clear/ Earth is a beautiful Heaven" + '"';
			Mesaje[53] = '"' + "Never look back. You're not going that way." + '"';
			Mesaje[54] = '"' + "Though we've got to say goodbye for the summer/ Darling, I promise you this/ I'll send you all my love everyday in a letter/ Sealed with a kiss" + '"';
			Mesaje[55] = '"' + "Between the velvet lies/ There's a truth that's hard as steel" + '"';
			Mesaje[56] = "Te iubesc mult, puiut!";
			Mesaje[57] = "Mi-ar fi placut sa te cunosc mult mai devreme.";
			Mesaje[58] = "Si acum ma intreb ce as fi facut daca nu ai fi aparut tu in viata mea.";
			Mesaje[59] = "Si acum imi fac griji daca trec mai mult de 3 ore fara sa vorbim unul cu celalalt.";
			Mesaje[60] = "Intotdeauna sa ajuti pe cineva daca poti. Indiferent de cine e acea persoana. Indiferent de ce ti-a facut sau de ce nu ti-a facut. Procedeaza mai inteligent decat ei.";
			Mesaje[61] = "Pentru o viata sanatoasa mancati un merisor si iubiti un puiut zilnic.";
			Mesaje[62] = '"' + "Cheama-ma si voi veni/ In fiecare noapte, in fiecare zi" + '"';
			Mesaje[63] = 'De fiecare data cand am fost suparat, ai stiut cum sa faci ca sa ma simt mai bine.';
			Mesaje[64] = 'Pentru mine esti si vei ramane mereu cea mai frumoasa.';
			Mesaje[65] = "Iubire. Respect. Incredere. Loialitate. Devotament.";
			Mesaje[66] = '"' + "Prietenia, piatra rara/ Ori o pastrezi, ori pierzi o comoara." + '"';
			Mesaje[67] = "Daca as putea sa dau timpul inapoi, probabil ca te-as fi salutat si eu cand ai venit in clasa a noua in vizita, la Clara :) ";
			
			Mesaje[68] = '"' + "Toate le sufera, toate le crede, toate le nadajduieste, toate le rabda. Dragostea nu cade niciodata." + '"';
			
			Mesaje[69] = '"' + "Limpede nu vezi decât cu inima. Ochii nu pot patrunde in miezul lucrurilor." +'"';
			Mesaje[70] = '"' + "Pentru a fi fericit trebuie doar sa te gandesti ca undeva, printre milioane de stele, este fiinta iubita." + '"';
			Mesaje[71] = "Multumita tie, fiecare seara e un prilej pentru o noua intalnire cu tine."; 
			Mesaje[72] = '"' + "Viata nu are sens decat daca o schimbi cat de cat." + '"';
			Mesaje[73] = '"' + "Nu iubi primavara, ci infatisarea unei anumite flori in care primavara s-a inchis; nu iubi dragostea, ci pe cel in care dragostea se intruchipeaza." +'"';	
			Mesaje[74] = '"' + "Esecurile ii intaresc pe cei puternici." + '"';
			Mesaje[75] = '"' + "A te judeca pe tine insuti este mult mai greu decat a-i judeca pe altii. Daca ajungi sa te judeci cum trebuie, inseamna ca esti intr-adevar un om intelept." + '"';
			Mesaje[76] = '"' + "Daca muncim numai pentru bunurile materiale, ne cladim singuri temnita." + '"';
			Mesaje[77] = '"' + "Accepti sa mori doar pentru ceea ce te face sa traiesti." + '"';
			Mesaje[78] = '"' + "Adevarul nu-l vedem decat cu sufletul. Esentialul scapa privirii." + '"';
			Mesaje[79] = '"' + 'El nu mi-a raspuns la nicio intrebare, insa atunci cand rosesti, raspunsul e „da”, nu-i asa?' + '"';
			Mesaje[80] = '"' + "E foarte trist cand prietenii sunt uitati. Nu toata lumea a avut vreodata un prieten." + '"';
			Mesaje[81] = '"' + "Daca tu, de pilda, vii la ora patru dupa-amiaza, eu inca de la trei voi incepe sa fiu fericita. Pe masura ce ora va trece, ma voi simti si mai fericita. La ora patru ma vor cuprinde un framant si o neliniste: voi descoperi cat pretuieste fericirea!" +'"';
			
			Mesaje[82] = '"' + "Oricum - era de preferat iadul cu o femeie desteapta decat paradisul cu una proasta." +'"';
			Mesaje[83] = '"' + "Dragostea este primul lucru capabil sa schimbe total viata unei persoane de la o clipa la alta."+ '"';
			Mesaje[84] = '"' + "Cel ce iubeste niciodata nu poate uri, chiar de ar fi orisice imprejurare, si aceasta este tocmai cel mai mare bun al dragostei." +'"';
			Mesaje[85] = '"' + "Sa fii iubit de cineva iti da putere, iar sa iubesti pe cineva iti da curaj." + '"';
			Mesaje[86] = '"' + "Daca tu esti o pasare, atunci si eu sunt o pasare." +'"';
			Mesaje[87] = '"' + "Iubirea este tot ce avem, este singura modalitate in care ne putem ajuta unul pe celalalt. " + '"';
			Mesaje[88] = '"' + "In iubire, totul se schimba, toate devin insemnate: dintr-un nimic se naste un colos." +'"';
			Mesaje[89] = '"' + "Toate zilele sunt nopti pana te vad, iar noptile stralucesc ca zilele cand te visez." + '"';
			Mesaje[90] = '"' + "Cum se iubesc oamenii pe pamant? – Luptand impreuna. " + '"';
			Mesaje[91] = '"' + "Suntem ceea ce iubim." + '"';
			Mesaje[92] = '"' + "Tot ce pot sa inteleg, inteleg doar din cauza ca te iubesc." + '"';
			Mesaje[93] = '"' + "Dragostea care nu are ca temei virtutea se risipeste si dispare repede." + '"';
			Mesaje[94] = '"' + "Dragostea nu este doar un zambet, nu este doar o floare, dragostea este un suflet ranit si apoi vindecat de altul." +'"';
			Mesaje[95] = '"' + "Poate ca Dumnezeu va dori sa cunosti multe persoane nepotrivite inainte de a cunoaste persoana potrivita, pentru ca atunci cand o vei cunoaste in sfarsit, ss stii sa fii recunoscator." +'"';
			Mesaje[96] = '"' + " Dragostea, flacara divina, este asemeni unei raze a asfintitului care lumineaza un munte intunecat." + '"';
			Mesaje[97] = '"' + "Dragostea schimba insasi natura lucrurilor. In mana dragostei, toate devin bune." +'"';
			Mesaje[98] = '"' + "Dragostea – radacina si izvorul binelui." + '"';
			Mesaje[99] = '"' + "Dragostea este o poveste straveche, dar care este totdeauna noua." +'"';
			Mesaje[100] = '"' + "Dragostea face inger pe cel hranit si crescut de ea." +'"';
			
			var indice = 0;
			for(i = 1; i<Luna; i++){
				indice = indice + NumarZile[i];
			}
			indice = (indice + Zi -34)%100;
			document.getElementById("mesajDeAfisat").innerHTML = Mesaje[indice];
			sir = "Roses/" + Luna + ".jpg";
			document.body.style.backgroundImage = "url('" + sir + "')";
			document.getElementById("imagineDeDesenat").src = './Poze/' + indice + '.jpg';
			
			
		}
