$(function() {
    //初始化题目
    var question=[["经前一周出现乳房胀痛的情况？",8,7,6,5,4,-1],
        ["经前思想不集中、工作效率低或易出错？",6,5,4,3,2,-1],
        ["经前三四天关节或者肌肉出现疼痛感？",6,5,4,3,2,-1],
        ["经期莫名烦躁，一点就着？",8,7,6,5,4,-1],
        ["经期第一天，会有腹痛、肚子下坠的感觉？",8,7,6,5,4,-1],
        ["经期腰部会有酸痛感？",6,5,4,3,2,-1],
        ["经期胃部较为不适，出现腹泻或者便秘的症状？",6,5,4,3,2,-1],
        ["经期食欲增大？",6,5,4,3,2,-1],
        ["皮肤的皮脂分泌旺盛，脸上容易长痘痘？",6,5,4,3,2,-1],
        ["半夜容易醒来，想睡又睡不着？",4,3,2,1,0,-1],
        ["你属于容易水肿的体质？",4,3,2,1,0,-1],
        ["生活和工作中容易感到疲劳？",6,5,4,3,2,-1],
        ["你平时喜欢吃冷的东西？",4,3,2,1,0,-1],
        ["体重较不稳定，时常有减肥的念头？",6,5,4,3,2,-1],
        ["日常生活中对自己要求严格，有重大情绪压力？",4,3,2,1,0,-1],
        ["平时会服用一些维生素来补充身体所需要的营养吗？",0,1,2,3,4,-1],
        ["在日常饮食中食用蔬菜、豆类、全麦等纤维质较多的食物吗？",0,1,2,3,4,-1],
        ["平时能保持一定量的运动锻炼吗？",0,1,2,3,4,-1]];
    $(".sug").click(function () {
        $(".sug").fadeOut()
        $(".content").fadeIn();
        for(var i=0;i<18;i++){
            $(".list ol").append("<li id='q"+i+"'>"+question[i][0]+"</li>");
        }
        $("li:first").addClass("active");
        //初始化滑块
        if($(window).width()<$(window).height())
            $(".knob").knob();
        var evt = "onorientationchange" in window ? "orientationchange" : "resize";
        window.addEventListener(evt, function() {
            if($(window).width()<$(window).height())
                $(".knob").knob();
        }, false);
        var currentQuestionFlag=0;
        var currentQuestionId="q0";
        var score=1;
        //题目跳转
        function turnTo() {
            window.location.href="#"+currentQuestionId;
            $('.knob').val(1).trigger('change');
        }
        $(".button").click(function(){
            $(".ball").css({
                "background": "url(image/button2.png) no-repeat 50%  50%",
                "background-size": "74%"
            });
            currentQuestionId=$(".active").attr("id");
            currentQuestionFlag=currentQuestionId.replace("q","");
            score=$('input.knob').val();
            if(score<=12){
                question[currentQuestionFlag][6]=question[currentQuestionFlag][1];
            }else if(score<=25){
                question[currentQuestionFlag][6]=question[currentQuestionFlag][2];
            }else if(score<=50){
                question[currentQuestionFlag][6]=question[currentQuestionFlag][3];
            }else if(score<=75){
                question[currentQuestionFlag][6]=question[currentQuestionFlag][4];
            }else if(score<=100){
                question[currentQuestionFlag][6]=question[currentQuestionFlag][5];
            }
            if(currentQuestionFlag>=17) {
                var flag=1;
                for (i = 0; i < 18; i++)
                    if (question[i][6] == -1){
                        currentQuestionId="q"+i;
                        alert("还有题没有答哦~即将跳转到未答题");
                        turnTo();
                        $(".active").removeClass("active");
                        $("#"+currentQuestionId).addClass("active");
                        flag=0;break;
                    }
                if(flag==1){
                    //    结束答题,出结果
                    $(".content").fadeOut();
                    $(".res-content").fadeIn();
                    result();
                }
            }
            else{
                turnTo();
                setTimeout(function(){
                    $(".ball").css({
                        "background": "url(image/button.png) no-repeat 50%  50%",
                        "background-size": "74%"
                    });
                },200);
                $(".active").removeClass("active").next().addClass("active");
            }
        });
        $("li").click(function(){
            currentQuestionId=$(this).prev().attr("id");
            turnTo();
            currentQuestionId=$(this).attr("id");
            $(".active").removeClass("active");
            $("#"+currentQuestionId).addClass("active");
        });
        function result() {
            score=0;
            for(i=0;i<18;i++)
                score+=question[i][6];
            $("#score").html(score);
            if(score>90){
                $(".detail h1").html("恭喜你，属于全球20%的少女之一!")
                $(".detail p").html("你的少女值MAX，上辈子一定拯救了银河系吧！作为女性，你的经期非常健康，姨妈来了和没来一个样，生活完全不受影响。但是随着年龄的增长，PMS的发病率会变高，所以请继续保持生活的好习惯并且预防PMS噢，加油吧，元气少女！");
            }else if(score>75){
                $(".detail h1").html("首先，你可以得瑟下，少女值达标！")
                $(".detail p").html("其次，你应该感受到了吧，虽然很轻微，你的生活也受到了PMS带来的困扰。你可以轻松愉悦地度过经前和经期的这段时间，但还是不能忽视PMS。平时注意饮食，多食用蔬菜、豆类等食物，多参加朋友之间的聚会，使心情保持愉快。让自己一直少女到八十岁！");
            }else if(score>60){
                $(".detail h1").html("嘟嘟嘟，你的少女值额度不足啦！")
                $(".detail p").html("PMS已经慢慢影响到你的日常生活，主要症状有疲劳乏力、睡眠障碍、易激动、焦虑、乳房胀痛、情绪不稳定等。你需要开始重视啦，不然分分钟告别少女时代啊！可以选择服用调节PMS的保健类产品，并且调整日常生活节奏，加强体育锻炼，改善饮食习惯。切记，坚持是少女之母！");
            }else{
                $(".detail h1").html("很遗憾的告诉你，你已经和少女没什么关系了T T")
                $(".detail p").html("PMS已经成为你生活中的隐形炸弹，严重影响着你的健康，并且使你的情绪在较长一段时间中处于负能量状态。为了拯救你的少女值，你需要进行药物治疗，并且调整日常生活习惯。坚持一段时间的努力和调整，相信你可以重返少女界！");
            }
        }
        $(".share-b").click(function(){
            $(".share").fadeIn();
        });
        $(".share").click(function(){
            $(".share").fadeOut();
        });
    });
});
