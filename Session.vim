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
tabrewind
edit gatsby-config.js
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
let s:l = 34 - ((26 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
34
normal! 012|
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
let s:l = 22 - ((21 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
22
normal! 022|
wincmd w
wincmd =
tabnext
edit /media/sdd2/myPortfolio/myportfolio/src/components/buttons/Button.stories.js
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
let s:l = 1 - ((0 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
argglobal
if bufexists("src/components/contact/Contact.stories.js") | buffer src/components/contact/Contact.stories.js | else | edit src/components/contact/Contact.stories.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 11 - ((10 * winheight(0) + 11) / 22)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
11
normal! 038|
wincmd w
argglobal
if bufexists("src/components/contact/Contact.component.js") | buffer src/components/contact/Contact.component.js | else | edit src/components/contact/Contact.component.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 25 - ((21 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
25
normal! 0
wincmd w
wincmd =
tabnext
edit src/components/navbar/Navbar.stories.js
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
let s:l = 12 - ((11 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
12
normal! 02|
wincmd w
argglobal
if bufexists("src/components/navbar/Navbar.component.js") | buffer src/components/navbar/Navbar.component.js | else | edit src/components/navbar/Navbar.component.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 20 - ((19 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
20
normal! 011|
wincmd w
2wincmd w
wincmd =
tabnext 3
set stal=1
badd +1 tailwind.config.js
badd +8 postcss.config.js
badd +6 src/components/sectionDivider/SectionDivider.stories.js
badd +35 src/components/latestWorkSubsection/LatestWorkSubsection.stories.js
badd +5 src/components/sectionDivider/SectionDivider.component.js
badd +21 src/components/latestWorkSubsection/LatestWorkSubsection.component.js
badd +22 /media/sdd2/myPortfolio/myportfolio/src/components/buttons/Button.stories.js
badd +1 src/components/buttons/Button.component.js
badd +14 src/components/card/Card.component.js
badd +1 src/components/workSectionHeader/WorkSectionHeader.component.js
badd +4 babel-plugin-macros.config.js
badd +6 .storybook/webpack.config.js
badd +1 gatsby-browser.js
badd +10 .storybook/main.js
badd +34 src/components/header.js
badd +20 gatsby-config.js
badd +5 src/utils/global.css
badd +3 .storybook/preview.js
badd +1 src/components/buttons/MyResumeButton/MyResumeButton.js
badd +1 src/pages/index.js
badd +2 .storybook/preview-head.html
badd +12 src/components/sectionHeader/SectionHeader.component.js
badd +14 src/components/sectionHeader/SectionHeader.stories.js
badd +12 src/components/hero/Hero.component.js
badd +12 src/components/workSectionHeader/WorkSectionHeader.stories.js
badd +27 src/components/card/Card.stories.js
badd +1 /media/sdd2/myPortfolio/myportfolio/src/components/latestWorkSubsection//Section.component.js
badd +11 src/components/hero/Hero.stories.js
badd +31 src/components/contact/Contact.component.js
badd +3 src/components/contact/Contact.stories.js
badd +17 src/components/navbar/Navbar.component.js
badd +0 src/components/navbar/Navbar.stories.js
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
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
