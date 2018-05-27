// main background

// background = function(){
// 	lebar = $(window).width()
// 	tinggi = $(window).height()
// 	if (tinggi > lebar){
// 		$('.background img').css({
// 			height: '100%',
// 			width: 'auto'
// 		})
// 	} else {
// 		$('.background img').css({
// 			height: 'auto',
// 			width: '100%'
// 		})
// 	}
// }
// background()
// $(window).resize(function(){
// 	background()
// })

// kendalikan tinggi dan lebar (480 x 854)

kendali_lebar_dan_tinggi = function(){
	tinggi_layar = $(window).height()
	$('.tampilan-hp, .background img').css({
		width: function(){
			return tinggi_layar * 480 / 854
		}
	})
}
kendali_lebar_dan_tinggi()
$(window).resize(function(){
	kendali_lebar_dan_tinggi()
})

// main masonry

$('.grid').masonry({
	itemSelector: '.grid-item'
})

// tampilkan menu setelah mengklik 'makan'

$('.tampilan').hide()
$('.tampilan_1').show()
$('.makan').click(function(){
	$('.tampilan').hide()
	$('.tampilan_2').show()
})
$('.minum').click(function(){
	$('.tampilan').hide()
	$('.tampilan_3').show()
})
$('.kamar-mandi').click(function(){
	$('.tampilan').hide()
	$('.tampilan_4').show()
})
$('.kembali').click(function(){
	$('.tampilan').hide()
	$('.tampilan_1').show()
})

// suara

playAudio = function(x){
	$('.suara').append('<audio autoplay>\
		<source src="'+x+'" type="audio/mp3">\
	</audio>')
}

playAudio('suara/lagu-tayo.mp3')

suara = function(x){
	$('.'+x).click(function(){
		playAudio("suara/"+x+".mp3");
	})
}
suara('makan')
suara('minum')
suara('kamar-mandi')
suara('telor')
suara('ayam')
suara('nasi-goreng')
suara('mi')
suara('bakso')
suara('donat')
suara('nasi-putih')
suara('tahu')
suara('tempe')
suara('sayur-sop')
suara('air-putih')
suara('susu-putih')
suara('susu-coklat')
suara('teh')
suara('buang-air-besar')
suara('buang-air-kecil')