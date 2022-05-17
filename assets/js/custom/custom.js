

// Code for preloader will be disappeared after all contents being loaded ----------------------------------------------------------*****
$(window).on('load', function () {
    $("#preloader ").fadeOut(500); 
    $("#main").css({'overflow':'unset'}); 

});
// Code for preloader will be disappeared after all contents being loaded ######################################-------------------------- Ended 



    $(window).scroll(function(){
        change_nav_color();
    });

    $(window).ready(function(){
        change_nav_color();
    });



    function change_nav_color(){
        var scroll = $(window).scrollTop();
        if (scroll > 5) {
          $(".navbar").removeClass("change_nav");
        }

        else{
            $(".navbar").addClass("change_nav");
        }
    }


    $(".static_btn").click(function(){
        $(this).css({"display":"none"});
        $(this).parent().parent().parent().find(".counter_btn").css({"display":"flex"});
        $(this).parent().parent().parent().find("input").val(1);


        
    });

    // counter btn on 
    $(".add_btn").click(function(){
        $current_val = parseInt($(this).parent().parent().parent().find("input").val());
       
        $update_val = $current_val + 1;
        $(this).parent().parent().parent().find("input").val($update_val);
    });

    $(".remove_btn").click(function(){
        $current_val = parseInt($(this).parent().parent().parent().find("input").val());
       
        $update_val = $current_val - 1;
        $(this).parent().parent().parent().find("input").val($update_val);

        if($update_val < 1){
            $(this).parent().parent().parent().find(".counter_btn").css({"display":"none"});
            $(this).parent().parent().parent().find(".static_btn").css({"display":"block"});
        }
    });
