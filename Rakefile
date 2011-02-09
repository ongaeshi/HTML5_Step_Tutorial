# -*- coding: utf-8 -*-
#
# @file 
# @brief
# @author ongaeshi
# @date   2011/02/04

SRC = "./Main/HTML5_Step_Tutorial"
DST = "./tmp"

FILES =
  [
   "Page_01.html",
   "Page_02.html",
   "Page_03.html",
   "Page_04.html",
   "Page_05.html",
   "Page_06.html",
   "index.html",
   "AboutMe.html",
  ]

def src(f)
  SRC + "/" + f
end

def dst(f)
  DST + "/" + f
end

def backup_file(org, tmp)
  FileUtils.cp org, tmp, {:verbose => true}
end

def touch_file(tmp)
  FileUtils.touch tmp
end  

def insert_file(org, from, to)
  data = File.read(org)
  data = data.gsub(from, to)

  open(org, "w") do |f|
    f.write(data)
  end
end

def insert_header_sub(org)
  from = <<EOF
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF

  to = <<EOF
    <script type="text/javascript" src="MyScripts/MyLib.js"></script>
    <script type="text/javascript" src="MyScripts/State.js"></script>
    <script type="text/javascript" src="MyScripts/PageCounter.js"></script>
    <script type="text/javascript" src="MyScripts/SubPage.js"></script>
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF

  insert_file(org, from, to)
end

def process_file(org, tmp)
  backup_file(org, tmp)
  yield org
  touch_file(tmp)
end

def insert_footer(data)
  from = <<EOF
  </body>
EOF

  to = <<EOF

    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-13136329-4']);
      _gaq.push(['_trackPageview']);

      (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
  </body>
EOF

  insert_file(data, from, to)
end

# ---------------------------------------------------------

task :default => FILES.map{|f|dst(f)}

# Page_01.html
file dst(FILES[0]) => [src(FILES[0])] do |t|
  process_file(t.prerequisites[0], t.name) do |f|
    insert_header_sub(f)
    insert_footer(f)
  end
end

# Page_02.html
file dst(FILES[1]) => [src(FILES[1])] do |t|
  process_file(t.prerequisites[0], t.name) do |f|
    insert_header_sub(f)
    insert_footer(f)
  end
end

# Page_03.html
file dst(FILES[2]) => [src(FILES[2])] do |t|
  process_file(t.prerequisites[0], t.name) do |f|
    insert_footer(f)

    from = <<EOF
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF

    to = <<EOF
    <script type="text/javascript" src="MyScripts/MyLib.js"></script>
    <script type="text/javascript" src="MyScripts/State.js"></script>
    <script type="text/javascript" src="MyScripts/PageCounter.js"></script>
    <script type="text/javascript" src="MyScripts/Page_03.js"></script>
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF

    insert_file(f, from, to)

    from = <<EOF
          <div id="id6" style="height: 162px; left: 37px; position: absolute; top: 466px; width: 624px; z-index: 1; " class="style_SkipStroke_7 shape-with-text stroke_1">
            <div class="text-content graphic_textbox_layout_style_default_External_622_160" style="padding: 1px; ">
              <div class="graphic_textbox_layout_style_default"></div>
            </div>
          </div>
EOF
    to = <<EOF
          <div style="position: absolute; top: 451px; left: 37px; z-index: 2; ">
            <p><canvas id="canvas" width="624" height="162" onclick="onclick_canvas(event)"></canvas></p>
            Speed :
            <button onclick="onclick_lbutton()">&lt;&lt;</button>
            <input id="speedmetor" size="2" onchange="onchange_text(this)"></input>
            <button onclick="onclick_rbutton()">&gt;&gt;</button>
          </div>
EOF

    insert_file(f, from, to)
  end
end

# Page_04.html
file dst(FILES[3]) => [src(FILES[3])] do |t|
  process_file(t.prerequisites[0], t.name) do |f|
    insert_footer(f)

    from = <<EOF
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF

    to = <<EOF
    <script type="text/javascript" src="MyScripts/MyLib.js"></script>
    <script type="text/javascript" src="MyScripts/State.js"></script>
    <script type="text/javascript" src="MyScripts/PageCounter.js"></script>
    <script type="text/javascript" src="MyScripts/Page_04.js"></script>
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF
    insert_file(f, from, to)

    from = <<EOF
          <div id="id5" style="height: 162px; left: 37px; position: absolute; top: 451px; width: 624px; z-index: 1; " class="style_SkipStroke_6 shape-with-text stroke_1">
            <div class="text-content graphic_textbox_layout_style_default_External_622_160" style="padding: 1px; ">
              <div class="graphic_textbox_layout_style_default"></div>
            </div>
          </div>
EOF
    to = <<EOF
          <div id="id5" style="height: 162px; left: 37px; position: absolute; top: 451px; width: 624px; z-index: 1; ">
            <textarea id="ta" rows="9" cols="74" placeholder="ここに書き込んだ情報はブラウザを閉じても全てローカルディスクに保存されます。"></textarea>
          </div>
EOF
    insert_file(f, from, to)
  end
end

# Page_05.html
file dst(FILES[4]) => [src(FILES[4])] do |t|
  process_file(t.prerequisites[0], t.name) do |f|
    insert_footer(f)

    from = <<EOF
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF

    to = <<EOF
    <link rel="stylesheet" type="text/css" media="screen,print" href="MyScripts/Page_05.css" />
    <script type="text/javascript" src="MyScripts/MyLib.js"></script>
    <script type="text/javascript" src="MyScripts/State.js"></script>
    <script type="text/javascript" src="MyScripts/PageCounter.js"></script>
    <script type="text/javascript" src="MyScripts/Page_05.js"></script>
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF

    insert_file(f, from, to)

    from = <<EOF
          <div id="id6" style="height: 350px; left: 264px; position: absolute; top: 257px; width: 312px; z-index: 1; " class="style_SkipStroke_7 shape-with-text stroke_1">
            <div class="text-content graphic_textbox_layout_style_default_External_310_348" style="padding: 1px; ">
              <div class="graphic_textbox_layout_style_default"></div>
            </div>
          </div>
EOF
    to = <<EOF
          <div style="height: 350px; left: 264px; position: absolute; top: 257px; width: 312px; z-index: 1; "> 
            <p id="status" class="success">Sorry, can't use drag&amp;drop your Browser!!</p>
            <div id="holder"></div> 
          </div> 
EOF

    insert_file(f, from, to)
  end
end

# Page_06.html
file dst(FILES[5]) => [src(FILES[5])] do |t|
  process_file(t.prerequisites[0], t.name) do |f|
    insert_footer(f)

    from = <<EOF
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF

    to = <<EOF
    <script type="text/javascript" src="MyScripts/MyLib.js"></script>
    <script type="text/javascript" src="MyScripts/State.js"></script>
    <script type="text/javascript" src="MyScripts/PageCounter.js"></script>
    <script type="text/javascript" src="MyScripts/Page_06.js"></script>
    <script type="text/javascript" src="MyScripts/html5jp/cpick.js"></script>
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF
    insert_file(f, from, to)

    from = <<EOF
                <p style="padding-bottom: 0pt; " class="paragraph_style_7"><span style="font-family: 'HiraKakuProN-W6', 'Hiragino Kaku Gothic ProN'; font-size: 18px; font-stretch: normal; font-style: normal; font-weight: 600; line-height: 27px; ">好きな色をクリック！</span>  </p>
EOF

    to = <<EOF
                <p style="padding-bottom: 0pt; " class="paragraph_style_7"><span style="font-family: 'HiraKakuProN-W6', 'Hiragino Kaku Gothic ProN'; font-size: 18px; font-stretch: normal; font-style: normal; font-weight: 600; line-height: 27px; ">好きな色をクリック！</span>  </p>
                <div class="cpick">
                  <input type="text" name="c2" value="#878585" size="36" id="t2" class="html5jp-cpick [coloring:true;callback:changeCpick]" />
                </div>
EOF
    insert_file(f, from, to)

  end
end

# index.html
file dst("index.html") => [src("index.html")] do |t|
  process_file(t.prerequisites[0], t.name) do |f|
    insert_footer(f)

    from = <<EOF
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF

    to = <<EOF
    <script type="text/javascript" src="MyScripts/PageCounter.js"></script>
    <script type="text/javascript" src="MyScripts/MyLib.js"></script>
    <script type="text/javascript" src="MyScripts/Canvas.js"></script>
    <script type="text/javascript" src="MyScripts/Item.js"></script>
    <script type="text/javascript" src="MyScripts/State.js"></script>
    <script type="text/javascript" src="MyScripts/Main.js"></script>
    <script type="text/javascript" src="Scripts/iWebSite.js"></script>
EOF
    insert_file(f, from, to)

    from = <<EOF
          <div id="id4" style="height: 54px; left: 152px; position: absolute; top: 115px; width: 550px; z-index: 1; " class="style_SkipStroke_4 shape-with-text">
EOF
    to = <<EOF
          <div id="Page_01" style="height: 54px; left: 152px; position: absolute; top: 115px; width: 550px; z-index: 1; " class="style_SkipStroke_4 shape-with-text">
EOF
    insert_file(f, from, to)

    from = <<EOF
          <div id="id5" style="height: 54px; left: 151px; position: absolute; top: 192px; width: 551px; z-index: 1; " class="style_SkipStroke_6 shape-with-text">
EOF
    to = <<EOF
          <div id="Page_02" style="height: 54px; left: 151px; position: absolute; top: 193px; width: 551px; z-index: 1; display:none" class="style_SkipStroke_6 shape-with-text">
EOF
    insert_file(f, from, to)

    from = <<EOF
          <div id="id6" style="height: 54px; left: 152px; position: absolute; top: 267px; width: 550px; z-index: 1; " class="style_SkipStroke_6 shape-with-text">
EOF
    to = <<EOF
          <div>
            <p><canvas id="canvas_02" width="550" height="60" style="position: absolute; top: 193px; left: 151px; z-index: 2; display: none;"></canvas></p>
          </div>

          <div id="Page_03" style="height: 54px; left: 152px; position: absolute; top: 267px; width: 550px; z-index: 1; display:none" class="style_SkipStroke_6 shape-with-text">
EOF
    insert_file(f, from, to)

    from = <<EOF
          <div id="id7" style="height: 54px; left: 152px; position: absolute; top: 343px; width: 550px; z-index: 1; " class="style_SkipStroke_6 shape-with-text">
EOF
    to = <<EOF
          <div>
            <p><canvas id="canvas_03" width="550" height="60" style="position: absolute; top: 267px; left: 152px; z-index: 2; display: none;"></canvas></p>
          </div>

          <div id="Page_04" style="height: 54px; left: 152px; position: absolute; top: 343px; width: 550px; z-index: 1; display: none;" class="style_SkipStroke_6 shape-with-text">
EOF
    insert_file(f, from, to)

    from = <<EOF
          <div id="id8" style="height: 54px; left: 152px; position: absolute; top: 423px; width: 550px; z-index: 1; " class="style_SkipStroke_6 shape-with-text">
EOF
    to = <<EOF
          <div>
            <p><canvas id="canvas_04" width="550" height="60" style="position: absolute; top: 343px; left: 152px; z-index: 2; display: none;"></canvas></p>
          </div>

          <div id="Page_05" style="height: 54px; left: 152px; position: absolute; top: 423px; width: 550px; z-index: 1; display: none;" class="style_SkipStroke_6 shape-with-text">
EOF
    insert_file(f, from, to)

    from = <<EOF
          <div id="id9" style="height: 54px; left: 152px; position: absolute; top: 502px; width: 550px; z-index: 1; " class="style_SkipStroke_6 shape-with-text">
EOF
    to = <<EOF
          <div>
            <p><canvas id="canvas_05" width="550" height="60" style="position: absolute; top: 423px; left: 152px; z-index: 2; display: none;"></canvas></p>
          </div>

          <div id="Page_06" style="height: 54px; left: 152px; position: absolute; top: 502px; width: 550px; z-index: 1; display: none;" class="style_SkipStroke_6 shape-with-text">
EOF
    insert_file(f, from, to)

    from = <<EOF
          <div id="id10" style="height: 46px; left: 26px; position: absolute; top: 604px; width: 648px; z-index: 1; " class="style_SkipStroke_7 shape-with-text">
EOF
    to = <<EOF
          <div>
            <p><canvas id="canvas_06" width="550" height="60" style="position: absolute; top: 502px; left: 152px; z-index: 2; display: none;"></canvas></p>
          </div>

          <div>
            <p><canvas id="canvas_arrow" width="64" height="600" style="position: absolute; top: 0px; left:95px; z-index: 2; "></canvas></p>
          </div>

          <div id="StaffRoll" style="height: 46px; left: 26px; position: absolute; top: 604px; width: 648px; z-index: 1; display: none;" class="style_SkipStroke_7 shape-with-text">
EOF
    insert_file(f, from, to)

    from = <<EOF
        <div style="height: 25px; margin-left: 0px; position: relative; width: 700px; z-index: 15; " id="footer_layer">
          <div style="height: 0px; line-height: 0px; " class="bumper"> </div>
EOF
    to = <<EOF
        <div style="height: 25px; margin-left: 0px; position: relative; width: 700px; z-index: 15; " id="footer_layer">
          <div style="height: 0px; line-height: 0px; " class="bumper"> </div>
          <div id="ClearButton" style="display: none;"><button onclick="PageCounter.clear()">クリア</button></div>
EOF
    insert_file(f, from, to)

#     from = <<EOF
# EOF
#     to = <<EOF
# EOF
#     insert_file(f, from, to)

  end
end

# AboutMe.html
file dst("AboutMe.html") => [src("AboutMe.html")] do |t|
  process_file(t.prerequisites[0], t.name) do |f|
    insert_header_sub(f)
    insert_footer(f)

    from = <<EOF
        <div style="height: 30px; margin-left: 0px; position: relative; width: 700px; z-index: 15; " id="footer_layer">
          <div style="height: 0px; line-height: 0px; " class="bumper"> </div>
EOF
    to = <<EOF
        <div style="height: 30px; margin-left: 0px; position: relative; width: 700px; z-index: 15; " id="footer_layer">
          <div style="height: 0px; line-height: 0px; " class="bumper"> </div>
          <div align="center"><button onclick="PageCounter.clearNotify('./index.html')">最初からやりなおす</button></div>
EOF
    insert_file(f, from, to)
  end
end

# reset
task :reset => [:restore, :default]

# restore
task :restore do |t|
  FILES.map do |f|
    FileUtils.cp dst(f), src(f), {:verbose => true}
  end
end


# clean
task :clean do
  FileUtils.rm FILES.map{|f|dst(f)}, {:force => true, :verbose => true}
end

# publish
task :publish do
  FileUtils.rm_r 'publish/HTML5_Step_Tutorial', {:force => true, :verbose => true}
  FileUtils.cp_r 'Main/HTML5_Step_Tutorial', 'publish', {:verbose => true}
  system("cd publish; ruby server.rb");
end


