document.getElementById("smallvocaring").innerHTML = `
<style>
@font-face{
    font-family:'Orbi';
    src:url(https://files.catbox.moe/q521mw.ttf);
}

@font-face{
    font-family:'Pixel Operator';
    src:url(https://files.catbox.moe/kyguk9.ttf);
}

@font-face {
    font-family: 'basiic';
    src: url('/fonts/basiic.ttf');
}

.smallvocacontainer::selection {
    background: #34f2ff;
    color:white;
}
 
.smallvocacontainer::-moz-selection {
    background: #34f2ff;
    color:white;
}

.smallvocacontainer{
    padding: 5px 5px 5px 2px; /*top right bottom left*/
}

#smallvocaring {
    width: 120px;
    margin: 5px auto;
}

#smallvocaring table {
    margin: 0 auto;
}

#smallvocaring .webring-info {
    text-align:center;
    font-family:basiic;
    color:#e74492;
    font-size:16px;
}

#smallvocaring .webring-links{
    font-size: 14px;
    font-family: basiic;
    color: #e74492;
    text-align:center;
}

#smallvocaring .webring-links a{
    text-decoration: none;
    color:#e74492;
    transition:0.3s;
}

#smallvocaring .webring-links a:hover{
    
    letter-spacing: normal;
}

img {
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
</style>

    <div class='smallvocacontainer' style='text-align: left;'>
            <div class='webring-info'>VOCALOID WEBRING</div>
            <div class='webring-links'>
                [<a href='https://webring.adilene.net/index.php' target='_blank' rel='noopener noreferrer'>Index</a> -- <a href='https://webring.adilene.net/members.php' target='_blank' rel='noopener noreferrer'>Members</a>] <br>
                <a href='https://webring.adilene.net/index.php' target='_blank' rel='noopener noreferrer'><img src="/gifs/tetoo.gif" alt="teto gif"></a>
            </div>
  </div>
`;