function search(){
    var main3 = document.querySelector('body > div > div.main3');
    main3.style.display="block";
    var main1 = document.querySelector('body > div > div.main1');
    main1.style.display="none";
    var main2 = document.querySelector('body > div > div.main2');
    main2.style.display="none";
}
function cancle_query(){
    var main3 = document.querySelector('body > div > div.main3');
    main3.style.display="none";
    var main1 = document.querySelector('body > div > div.main1');
    main1.style.display="block";
    var main2 = document.querySelector('body > div > div.main2');
    main2.style.display="block";
}