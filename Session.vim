let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd /media/sdd2/myPortfolio/myportfolio
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
$argadd postcss.config.js
set stal=2
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabrewind
edit gatsby-config.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 24 + 26) / 52)
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe '2resize ' . ((&lines * 23 + 26) / 52)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 3resize ' . ((&columns * 105 + 105) / 211)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 2 - ((1 * winheight(0) + 12) / 24)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
2
normal! 036|
wincmd w
argglobal
if bufexists(".storybook/webpack.config.js") | buffer .storybook/webpack.config.js | else | edit .storybook/webpack.config.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 2 - ((0 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
2
normal! 0
wincmd w
argglobal
if bufexists("tailwind.config.js") | buffer tailwind.config.js | else | edit tailwind.config.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 33 - ((32 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
33
normal! 043|
wincmd w
exe '1resize ' . ((&lines * 24 + 26) / 52)
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe '2resize ' . ((&lines * 23 + 26) / 52)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 3resize ' . ((&columns * 105 + 105) / 211)
tabnext
edit src/components/buttons/Button.component.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 5 - ((4 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
5
normal! 0
wincmd w
argglobal
if bufexists("src/components/about/About.component.js") | buffer src/components/about/About.component.js | else | edit src/components/about/About.component.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 38 - ((37 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
38
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
tabnext
edit src/components/latestWorkSubsection/LatestWorkSubsection.component.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 52 - ((26 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
52
normal! 056|
wincmd w
argglobal
if bufexists("src/templates/latestWork/LatestWork.component.js") | buffer src/templates/latestWork/LatestWork.component.js | else | edit src/templates/latestWork/LatestWork.component.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 49 - ((25 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
49
normal! 011|
wincmd w
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
tabnext
edit src/content/latest-works/ecommerce.mdx
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 24 + 26) / 52)
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe '2resize ' . ((&lines * 23 + 26) / 52)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 3resize ' . ((&columns * 105 + 105) / 211)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 26 - ((20 * winheight(0) + 12) / 24)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
26
normal! 04|
wincmd w
argglobal
if bufexists("src/content/latest-works/akariweb.mdx") | buffer src/content/latest-works/akariweb.mdx | else | edit src/content/latest-works/akariweb.mdx | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 4 - ((3 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 016|
wincmd w
argglobal
if bufexists("src/content/latest-works/akariapp.mdx") | buffer src/content/latest-works/akariapp.mdx | else | edit src/content/latest-works/akariapp.mdx | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 4 - ((3 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 016|
wincmd w
exe '1resize ' . ((&lines * 24 + 26) / 52)
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe '2resize ' . ((&lines * 23 + 26) / 52)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 3resize ' . ((&columns * 105 + 105) / 211)
tabnext
edit src/components/about/About.component.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 21 - ((0 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
21
normal! 02|
wincmd w
argglobal
if bufexists("src/components/footer/Footer.component.js") | buffer src/components/footer/Footer.component.js | else | edit src/components/footer/Footer.component.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 16 - ((15 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
16
normal! 09|
wincmd w
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
tabnext
edit src/components/menuPanel/MenuPanel.component.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 43 - ((33 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
43
normal! 07|
wincmd w
argglobal
if bufexists("src/components/header/Header.component.js") | buffer src/components/header/Header.component.js | else | edit src/components/header/Header.component.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 22 - ((11 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
22
normal! 0
wincmd w
wincmd =
tabnext
edit src/components/contact/Contact.component.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 28 - ((11 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
28
normal! 044|
wincmd w
argglobal
if bufexists("src/components/latestWork/LatestWork.component.js") | buffer src/components/latestWork/LatestWork.component.js | else | edit src/components/latestWork/LatestWork.component.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 61 - ((47 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
61
normal! 0
wincmd w
wincmd =
tabnext
edit src/components/bottomHamburger/BottomHamburger.component.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 9 - ((8 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
9
normal! 0101|
tabnext
edit src/components/card/Card.component.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 22 - ((21 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
22
normal! 02|
tabnext
edit src/components/imageLoader/ImageLoader.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 30 - ((27 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
30
normal! 069|
wincmd w
argglobal
if bufexists("src/components/goBack/GoBack.component.js") | buffer src/components/goBack/GoBack.component.js | else | edit src/components/goBack/GoBack.component.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 11 - ((0 * winheight(0) + 24) / 48)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
11
normal! 017|
wincmd w
wincmd =
tabnext 7
set stal=1
badd +77 gatsby-config.js
badd +8 postcss.config.js
badd +6 src/components/buttons/Button.component.js
badd +108 src/components/latestWorkSubsection/LatestWorkSubsection.component.js
badd +1 src/content/latest-works/ecommerce.mdx
badd +1 src/components/menuPanel/MenuPanel.component.js
badd +61 src/components/latestWork/LatestWork.component.js
badd +23 src/components/bottomHamburger/BottomHamburger.component.js
badd +9 src/components/card/Card.component.js
badd +48 src/components/imageLoader/ImageLoader.js
badd +1 .storybook/webpack.config.js
badd +22 tailwind.config.js
badd +36 src/components/about/About.component.js
badd +10 src/templates/latestWork/LatestWork.component.js
badd +19 src/content/latest-works/akariweb.mdx
badd +1 src/content/latest-works/akariapp.mdx
badd +13 src/components/footer/Footer.component.js
badd +56 src/components/header/Header.component.js
badd +11 src/components/goBack/GoBack.component.js
badd +6 src/components/sectionHeader/SectionHeader.component.js
badd +1 src/components/navbar/Navbar.component.js
badd +19 src/components/otherWorks/OtherWorks.component.js
badd +20 src/templates/layout/Layout.component.js
badd +1 src/pages/index.js
badd +1 src/components/goTop/GoTop.component.js
badd +40 src/components/hero/Hero.component.js
badd +10 src/pages/menu.js
badd +9 src/components/footer/Footer.stories.js
badd +6 src/components/navbar/Navbar.stories.js
badd +9 src/components/menuPanel/MenuPanel.stories.js
badd +2 src/components/buttons/Button.stories.js
badd +11 src/components/contact/Contact.stories.js
badd +41 src/components/contact/Contact.component.js
badd +6 src/components/sectionDivider/SectionDivider.stories.js
badd +34 src/components/latestWorkSubsection/LatestWorkSubsection.stories.js
badd +53 src/components/sectionDivider/SectionDivider.component.js
badd +12 src/components/workSectionHeader/WorkSectionHeader.component.js
badd +4 babel-plugin-macros.config.js
badd +1 gatsby-browser.js
badd +2 .storybook/main.js
badd +34 src/components/header.js
badd +5 src/utils/global.css
badd +19 .storybook/preview.js
badd +1 src/components/buttons/MyResumeButton/MyResumeButton.js
badd +2 .storybook/preview-head.html
badd +14 src/components/sectionHeader/SectionHeader.stories.js
badd +12 src/components/workSectionHeader/WorkSectionHeader.stories.js
badd +7 src/components/card/Card.stories.js
badd +1 src/components/latestWorkSubsection/Section.component.js
badd +11 src/components/hero/Hero.stories.js
badd +1 src/components/header/Header.stories.js
badd +12 src/pages/menu-panel.js
badd +1 src/components/layout.js
badd +33 src/components/about/About.stories.js
badd +1 ~/.vim/coc-settings.json
badd +12 src/pages/akariweb.mdx
badd +38 src/utils/hooks.js
badd +9 src/pages/404.js
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOSc
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
nohlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
