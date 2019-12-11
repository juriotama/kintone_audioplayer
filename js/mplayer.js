//=============================================================================
//【ファイル名】
//    mplayer.js
//=============================================================================

(function () {

    'use strict';
    
    // =============================================
    // EVENT:index.show
    // =============================================
    kintone.events.on([
        'app.record.index.show'
    ], function(event) {

        $('.recordlist-file-others-gaia').each(function() {
            let href = $(this).find("a").attr('href');
            let hrefarry = href.split(".");
            let extention = hrefarry[hrefarry.length-1];
            if(extention==="mp3"|| extention==="m4a" || extention==="wav"){
                $(this).parent().append(`<li><audio src="${href}" controls><p>音声を再生するには、audioタグをサポートしたブラウザが必要です。</p></audio></li> `);
            }
        });
    
        return event;
    });  // end kintone.events.on [index.show]

})();
