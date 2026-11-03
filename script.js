// Dữ liệu mẫu đầy đủ toàn bộ các tướng Overwatch, tự động sắp xếp theo alphabet
const heroesData = [
  // --- TANK ---
  {
    id: 'dva',
    name: 'D.Va',
    role: 'Tank',
    image: 'image/Icon-D.Va.webp',
    bio: 'D.Va là một cựu game thủ chuyên nghiệp, người hiện đang sử dụng các kỹ năng của mình để điều khiển một cỗ máy chiến đấu tối tân nhằm bảo vệ quê hương.',
    stats: { hp: 350, armor: 300, shield: 0, speed: 'Cao', difficulty: 2 },
    abilities: [
      { name: 'Fusion Cannons (Pháo tự động)', desc: 'Pháo tầm gần xả đạn liên tục không cần nạp đạn, nhưng làm giảm tốc độ di chuyển.' },
      { name: 'Boosters (Tên lửa đẩy)', desc: 'Lướt nhanh trên không theo hướng đang nhìn, đẩy lùi kẻ địch khi va chạm.' },
      { name: 'Defense Matrix (Ma trận phòng thủ)', desc: 'Dựng một vùng không gian trước mặt để tiêu hủy toàn bộ đạn và pháo bay tới.' },
      { name: 'Micro Missiles (Tên lửa vi mô)', desc: 'Bắn ra một loạt tên lửa nhỏ gây sát thương nổ diện rộng.' },
      { name: 'Self-Destruct (Tự hủy MEKA)', desc: 'Kích hoạt lệnh tự hủy MEKA, gây sát thương chí mạng trên diện rộng.' }
    ]
  },
  {
    id: 'orisa',
    name: 'Orisa',
    role: 'Tank',
    image: 'image/Icon-Orisa.webp',
    bio: 'Được chế tạo từ các bộ phận của một trong những robot phòng thủ OR15 – vốn chỉ tồn tại trong thời gian ngắn tại Numbani – Orisa chính là người bảo vệ mới nhất của thành phố này, dù cô vẫn còn nhiều điều phải học hỏi.',
    stats: { hp: 275, armor: 275, shield: 0, speed: 'Thấp', difficulty: 2 },
    abilities: [
      { name: 'Augmented Fusion Driver (Pháo tự động nâng cấp)', desc: 'Súng máy tầm trung tỏa nhiệt khi bắn liên tục thay vì nạp đạn.' },
      { name: 'Energy Javelin (Lao năng lượng)', desc: 'Phóng một cây lao năng lượng đẩy lùi kẻ địch, nếu chúng đập vào tường sẽ bị choáng.' },
      { name: 'Fortify (Cường hóa)', desc: 'Tăng lượng giáp, miễn nhiễm hiệu ứng khống chế và giảm nhiệt phát sinh từ súng.' },
      { name: 'Javelin Spin (Xoay lao)', desc: 'Xoay cù lao năng lượng để phá hủy đạn bay tới, chặn cận chiến và tăng tốc độ di chuyển.' },
      { name: 'Terra Surge (Cơn sóng địa chấn)', desc: 'Kéo gom kẻ địch xung quanh vào tâm và cắm chặt lao xuống đất, đồng thời nhận hiệu ứng Fortify (Cường hóa) và tích tụ năng lượng gây sát thương cực lớn. Nhấn phím [Q] lần nữa để giải phóng chiêu thức sớm hơn.'}
    ]
  },
  {
    id: 'roadhog',
    name: 'Roadhog',
    role: 'Tank',
    image: 'image/Icon-Roadhog.webp',
    bio: 'Roadhog là một kẻ thực thi đầy quyền năng, nổi tiếng với những hành vi tàn phá ngẫu hứng và vô tội vạ.',
    stats: { hp: 700, armor: 0, shield: 0, speed: 'Thấp', difficulty: 1 },
    abilities: [
      { name: 'Scrap Gun (Súng phế liệu)', desc: 'Bắn ra một chùm đạn tản mát tầm gần hoặc quả cầu phế liệu phát nổ tầm xa.' },
      { name: 'Trash Compactor (Máy nén phế liệu)', desc: 'Hút toàn bộ đạn đạo của kẻ địch và nén chúng lại thành một khối phế liệu có thể phóng ra gây nổ.' },
      { name: 'Chain Hook (Móc xích)', desc: 'Ném xích túm lấy kẻ địch và kéo sát lại gần vị trí của mình.' },
      { name: 'Take a Breather (Hít thở sâu)', desc: 'Uống thuốc hồi máu tức thời và giảm lượng sát thương nhận phải trong lúc hồi phục.' },
      { name: 'Whole Hog (Heo Điên)', desc: 'Lắp một cỗ máy súng máy hạng nặng liên thanh vào Scrap Gun, liên tục xả ra hàng loạt đạn phế liệu đẩy lùi toàn bộ kẻ địch đứng trước mặt.' }
    ]
  },
  {
    id: 'reinhardt',
    name: 'Reinhardt',
    role: 'Tank',
    image: 'image/Icon-Reinhardt.webp',
    bio: 'Reinhardt Wilhelm tự coi mình là một nhà vô địch của thời đại đã qua, người sống theo các quy tắc hiệp sĩ về lòng dũng cảm, công lý và sự can trường.',
    stats: { hp: 300, armor: 300, shield: 1600, speed: 'Thấp', difficulty: 1 },
    abilities: [
      { name: 'Rocker hammer (Búa tạ)', desc: 'Vũ khí chính dạng cận chiến. Vung cây búa phóng rocket hạng nặng để giáng những đòn cực mạnh vào kẻ địch phía trước theo hình vòng cung rộng.' },
      { name: 'Barrier Field (Khiên năng lượng)', desc: 'Dựng một tấm khiên năng lượng phía trước để chặn sát thương từ kẻ địch cho toàn đội.' },
      { name: 'Charge (Xung phong)', desc: 'Lao thẳng về phía trước, đâm xuyên kẻ địch và ghim chúng vào tường để gây sát thương nặng.' },
      { name: 'Fire Strike (Hỏa Diễm Kích)', desc: 'Vung búa phóng ra một luồng đạn năng lượng bốc lửa bay thẳng về phía trước, xuyên qua mọi kẻ địch và lá chắn của đối phương trên đường đi.' },
      { name: 'Earthshatter (Địa chấn)', desc: 'Nện búa xuống đất làm choáng tất cả kẻ địch đứng ở phía trước trong tầm ảnh hưởng.' }
    ]
  },
  {
    id: 'sigma',
    name: 'Sigma',
    role: 'Tank',
    image: 'image/Icon-Sigma.webp',
    bio: 'Cuộc đời của nhà vật lý thiên văn lỗi lạc, Tiến sĩ Siebren de Kuiper, đã thay đổi mãi mãi khi một thí nghiệm gặp sự cố mang đến cho ông khả năng điều khiển trọng lực; giờ đây, tổ chức Talon đang thao túng ông để phục vụ cho mục đích riêng của chúng.',
    stats: { hp: 350, armor: 0, shield: 200, speed: 'Thấp', difficulty: 3 },
    abilities: [
      { name: 'Hyperspheres (Cầu không gian)', desc: 'Bắn ra hai quả cầu năng lượng nảy trên mặt đất và phát nổ sau một thời gian ngắn.' },
      { name: 'Experimental Barrier (Khiên thực nghiệm phóng)', desc: 'Phóng một tấm khiên năng lượng phẳng ra phía trước và giữ nó lơ lửng tại vị trí chỉ định.' },
      { name: 'Kinetic Grasp (Nắm bắt động năng)', desc: 'Hấp thụ đạn bắn tới từ phía trước để chuyển hóa thành giáp tạm thời cho bản thân.' },
      { name: 'Accretion (Kết tụ thiên thạch)', desc: 'Ném một khối đá lớn vào kẻ địch để gây sát thương và làm choáng.' },
      { name: 'Gravitic Flux (Dòng chảy trọng lực)', desc: 'Khai thác sức mạnh trọng lực để nhấc bổng toàn bộ kẻ địch trong vùng ảnh hưởng lên không trung, sau đó đập mạnh chúng xuống đất gây lượng sát thương cực lớn dựa theo phần trăm máu tối đa của nạn nhân.' }
    ]
  },
  {
    id: 'winston',
    name: 'Winston',
    role: 'Tank',
    image: 'image/Icon-Winston.webp',
    bio: 'Winston, một chú khỉ đột sở hữu trí tuệ siêu việt nhờ kỹ thuật di truyền, là một nhà khoa học lỗi lạc và là người ủng hộ mạnh mẽ cho tiềm năng của nhân loại.',
    stats: { hp: 350, armor: 200, shield: 0, speed: 'Cao', difficulty: 2 },
    abilities: [
      { name: 'Tesla Cannon (Pháo Tesla)', desc: 'Phóng ra một luồng điện tầm gần tấn công nhiều kẻ địch cùng lúc.' },
      { name: 'Jump Pack (Nhảy vọt)', desc: 'Phóng người lên không trung và tạo ra sức ép mạnh khi tiếp đất.' },
      { name: 'Barrier Projector (Máy chiếu khiên)', desc: 'Đặt xuống một vòm khiên hình cầu bảo vệ bản thân và đồng đội khỏi đạn địch.' },
      { name: 'Tesla Cannon (Pháo Tesla)', desc: 'Winston bộc lộ bản năng thú tính, gia tăng mạnh lượng máu tối đa, giảm thời gian hồi chiêu của Jump Pack (Nhảy vọt), và cường hóa các đòn đánh cận chiến để đánh văng kẻ địch ra xa. Trong thời gian này, Winston chỉ có thể sử dụng đòn đánh cận chiến và nhảy.' }
    ]
  },


  // --- DAMAGE ---
  {
    id: 'genji',
    name: 'Genji',
    role: 'Damage',
    image: 'image/Icon-Genji.webp',
    bio: 'Ninja người máy Genji Shimada đã hòa hợp với cơ thể được tăng cường mà trước đây anh từng chối bỏ, và nhờ đó, anh đã khám phá ra một nhân tính cao đẹp hơn.',
    stats: { hp: 250, armor: 0, shield: 0, speed: 'Cao', difficulty: 3 },
    abilities: [
      { name: 'Shuriken (Phi Tiêu)', desc: 'Ném ra một loạt 3 phi tiêu theo đường thẳng với độ chính xác cao, hoặc vung tay ném tỏa thành hình quạt 3 phi tiêu sang hai bên ở cự ly gần.' },
      { name: 'Deflect (Phản công)', desc: 'Dùng kiếm gạt bỏ tất cả các phát bắn và phóng ngược đạn về phía kẻ thù.' },
      { name: 'Swift Strike (Lướt kiếm)', desc: 'Lướt tới phía trước và chém xuyên qua kẻ địch. Hạ gục địch sẽ hồi lại thời gian chiêu.' },
      { name: 'Dragonblade (Long kiếm)', desc: 'Rút thanh long kiếm uy lực trong một thời gian ngắn, chém cận chiến sát thương cao.' }
    ]
  },
  {
    id: 'pharah',
    name: 'Pharah',
    role: 'Damage',
    image: 'image/Icon-Pharah.webp',
    bio: 'Tinh thần tận tụy với nhiệm vụ đã thấm sâu vào máu thịt của Fareeha Amari. Cô xuất thân từ một gia đình có truyền thống lâu đời gồm nhiều quân nhân được trao tặng vô số huân chương, và trong cô luôn cháy bỏng khát khao được phục vụ một cách đầy vinh dự.',
    stats: { hp: 250, armor: 0, shield: 0, speed: 'Cao', difficulty: 2 },
    abilities: [
      { name: 'Rocket Launcher (Súng phóng tên lửa)', desc: 'Bắn ra những quả đạn tên lửa phát nổ gây sát thương diện rộng.' },
      { name: 'Jet Dash ( Lướt phản lực)', desc: 'Lướt nhanh về phía trước theo hướng đang nhìn, giúp Pharah né tránh đòn tấn công hoặc thay đổi vị trí chớp nhoáng trên không.' },
      { name: 'Jump Jet (Phản lực)', desc: 'Phóng vút lên cao trên không trung để kiểm soát không địa.' },
      { name: 'Concussive Blast (Sóng chấn động)', desc: 'Bắn ra một tia xung lực đẩy lùi cả kẻ địch lẫn bản thân khỏi vị trí trúng đạn.' },
      { name: 'Barrage (Mưa tên lửa)', desc: 'Đứng lại và phóng ra một loạt hàng chục quả tên lửa liên tục hủy diệt vùng chỉ định.' }
    ]
  },
  {
    id: 'reaper',
    name: 'Reaper',
    role: 'Damage',
    image: 'image/Icon-Reaper.webp',
    bio: 'Có người nhắc đến một kẻ khủng bố khoác áo choàng đen, được biết đến với cái tên "Thần Chết" (Reaper). Danh tính và động cơ của hắn vẫn là một ẩn số. Chỉ biết rằng, cứ nơi nào hắn xuất hiện, nơi đó cái chết sẽ theo sau.',
    stats: { hp: 300, armor: 0, shield: 0, speed: 'Trung bình', difficulty: 1 },
    abilities: [
      { name: 'Hellfire Shotguns (Súng ngắn đôi)', desc: 'Xả đạn tầm gần cực mạnh với hai khẩu súng shotgun uy lực.' },
      { name: 'Wraith Form (Hóa bóng ma)', desc: 'Trở thành dạng bóng ma không thể nhận sát thương và tăng tốc độ di chuyển tạm thời.' },
      { name: 'Shadow Step (Bước chân bóng tối)', desc: 'Dịch chuyển tức thời đến một vị trí đích nằm trong tầm nhìn.' },
      { name: 'Death Blossom (Bông hoa tử thần)', desc: 'Xoay tròn xả súng liên tục xung quanh bản thân gây sát thương khổng lồ cho mọi kẻ địch lân cận.' }
    ]
  },
  {
    id: 'soldier76',
    name: 'Soldier: 76',
    role: 'Damage',
    image: 'image/Icon-Soldier_76.webp',
    bio: 'Là mục tiêu của một cuộc truy lùng trên phạm vi quốc tế, nhân vật hành hiệp tự phong được biết đến với cái tên Soldier: 76 đang tiến hành một cuộc chiến cá nhân nhằm phơi bày sự thật đằng sau sự sụp đổ của Overwatch.',
    stats: { hp: 250, armor: 0, shield: 0, speed: 'Cao', difficulty: 1 },
    abilities: [
      { name: 'Heavy Pulse Rifle (Súng trường xung kích)', desc: 'Súng trường tự động có độ chính xác cao khi bắn từng loạt.' },
      { name: 'Sprint (Chạy Nước Rút)', desc: 'Kích hoạt chế độ chạy nhanh về phía trước để di chuyển linh hoạt trên chiến trường. Hành động này sẽ tạm dừng khi người chơi bắn súng hoặc thực hiện hành động khác.' },
      { name: 'Helix Rockets (Tên lửa Helix)', desc: 'Phóng một loạt tên lửa nhỏ xoắn ốc gây sát thương nổ lớn.' },
      { name: 'Biotic Field (Trường sinh học)', desc: 'Đặt thiết bị hồi máu xuống đất cho bản thân và đồng đội đứng trong vùng ảnh hưởng.' }
    ]
  },
  {
    id: 'tracer',
    name: 'Tracer',
    role: 'Damage',
    image: 'image/Icon-Tracer.webp',
    bio: 'Cựu đặc vụ Overwatch được biết đến với cái tên Tracer là một nhà thám hiểm có khả năng dịch chuyển xuyên thời gian, đồng thời là một nguồn năng lượng tích cực không gì ngăn cản nổi.',
    stats: { hp: 175, armor: 0, shield: 0, speed: 'Rất cao', difficulty: 2 },
    abilities: [
      { name: 'Pulse Pistols (Súng Lục Xung Hưởng)', desc: 'Cặp súng lục tự động xả ra lượng đạn lớn với tốc độ cực cao ở cự ly gần.' },
      { name: 'Blink (Tốc biến)', desc: 'Lướt nhanh về phía trước theo hướng đang di chuyển. Có thể tích trữ tối đa 3 lần.' },
      { name: 'Recall (Hồi tưởng)', desc: 'Đưa Tracer quay ngược thời gian về vị trí và lượng máu cô ấy có từ vài giây trước.' },
      { name: 'Pulse Bomb (Bom xung kích)', desc: 'Ném một quả bom dính phát nổ sau một khoảng thời gian ngắn, gây sát thương cực lớn.' }
    ]
  },
  {
    id: 'widowmaker',
    name: 'Widowmaker',
    role: 'Damage',
    image: 'image/Icon-Widowmaker.webp',
    bio: 'Widowmaker là một sát thủ hoàn hảo: một kẻ giết người kiên nhẫn, tàn nhẫn và cực kỳ hiệu quả, không hề bộc lộ cảm xúc hay chút hối hận nào.',
    stats: { hp: 175, armor: 0, shield: 0, speed: 'Trung bình', difficulty: 3 },
    abilities: [
      { name: 'Widow\'s Kiss (Nụ hôn sát thủ)', desc: 'Súng trường linh hoạt có thể chuyển đổi chế độ ngắm bắn tỉa sát thương chí mạng.' },
      { name: 'Grappling Hook (Móc câu)', desc: 'Bắn dây móc lên các gờ tường cao để chiếm vị trí hiểm yếu.' },
      { name: 'Venom Mine (Mìn độc)', desc: 'Đặt bẫy mìn phun khí độc gây sát thương theo thời gian lên kẻ địch.' },
      { name: 'Infra-Sight (Tầm Nhìn X-Quang)', desc: 'Kích hoạt kính ngắm trinh sát công nghệ cao, hiển thị vị trí và quỹ đạo di chuyển của toàn bộ kẻ địch xuyên qua mọi chướng ngại vật/mãng tường cho bản thân và toàn bộ đồng đội.' }
    ]
  },

  // --- SUPPORT ---
  {
    id: 'ana',
    name: 'Ana',
    role: 'Support',
    image: 'image/Icon-Ana.webp',
    bio: 'Là một trong những thành viên sáng lập Overwatch, Ana sử dụng các kỹ năng và chuyên môn của mình để bảo vệ quê hương cùng những người mà bà yêu quý.',
    stats: { hp: 200, armor: 0, shield: 0, speed: 'Trung bình', difficulty: 3 },
    abilities: [
      { name: 'Biotic Rifle (Súng sinh học)', desc: 'Bắn ra đạn dược từ xa có thể hồi máu cho đồng đội hoặc gây sát thương kẻ địch.' },
      { name: 'Sleep Dart (Đạn ngủ)', desc: 'Bắn ra mũi tên khiến kẻ địch trúng phải rơi vào trạng thái ngủ bất tỉnh tạm thời.' },
      { name: 'Biotic Grenade (Lựu đạn sinh học)', desc: 'Ném một quả lựu đạn giúp hồi máu và tăng khả năng hồi máu cho đồng minh, đồng thời gây sát thương và ngăn cản khả năng hồi máu của kẻ địch.'},
      { name: 'Nano Boost (Cường hóa)', desc: 'Tăng mạnh sát thương gây ra, đồng thời giảm sát thương nhận vào cho một đồng đội.' }
    ]
  },
  {
    id: 'baptiste',
    name: 'Baptiste',
    role: 'Support',
    image: 'image/Icon-Baptiste.webp',
    bio: 'Là một quân y tinh nhuệ và cựu đặc vụ của tổ chức Talon, Baptiste hiện sử dụng các kỹ năng của mình để giúp đỡ những người có cuộc sống bị ảnh hưởng bởi chiến tranh.',
    stats: { hp: 200, armor: 0, shield: 0, speed: 'Trung bình', difficulty: 3 },
    abilities: [
      { name: 'Biotic Launcher (Súng phóng sinh học)', desc: 'Súng trường bắn đạn sát thương tầm trung kết hợp phóng lựu đạn hồi máu cho đồng đội.' },
      { name: 'Regenerative Burst (Bùng nổ sinh học)', desc: 'Kích hoạt làn sóng hồi máu theo thời gian cho bản thân và đồng minh lân cận.' },
      { name: 'Immortality Field (Trường bất tử)', desc: 'Đặt một thiết bị tạo trường năng lượng ngăn cản đồng minh bên trong bị hạ gục xuống dưới mức máu tối thiểu.' },
      { name: 'Amplification Matrix (Ma trận khuếch đại)', desc: 'Dựng một khung năng lượng khuyếch đại gấp đôi sát thương hoặc tầm hồi máu của mọi phát bắn đi qua.' }
    ]
  },
  {
    id: 'kiriko',
    name: 'Kiriko',
    role: 'Support',
    image: 'image/Icon-kiriko.webp',
    bio: 'Là một miko tại đền thờ Kanezaka và là con gái của cựu bậc thầy kiếm thuật nhà Shimada, Kiriko Kamori vận dụng cả kỹ năng tâm linh lẫn kỹ năng ninja của mình để hàn gắn thành phố đang bị chia rẽ.',
    stats: { hp: 200, armor: 0, shield: 0, speed: 'Cao', difficulty: 2 },
    abilities: [
      { name: 'Healing Ofuda (Bùa hồi máu)', desc: 'Phóng ra những lá bùa tâm linh bay tự động tìm đến và hồi máu cho đồng đội.' },
      { name: 'Swift Step (Bước Đi Thiểm Điện)', desc: 'Dịch chuyển tức thời xuyên tường để xuất hiện ngay bên cạnh một đồng đội.' },
      { name: 'Protection Suzu (Chuông Hộ Thân)', desc: 'Ném một chiếc chuông nhỏ xuống mặt đất, tạo ra vùng năng lượng bảo vệ khiến đồng minh trong phạm vi ảnh hưởng trở nên bất tử tạm thời và xóa bỏ mọi hiệu ứng bất lợi' },
      { name: 'Kitsune Rush (Tiếng gọi Kitsune)', desc: 'Triệu hồi cáo thần tăng tốc độ di chuyển, tốc độ đánh và hồi chiêu cho đồng đội.' }
    ]
  },
  {
    id: 'mercy',
    name: 'Mercy',
    role: 'Support',
    image: 'image/Icon-Mercy.webp',
    bio: 'Là thiên thần hộ mệnh cho những ai được cô chăm sóc, Bác sĩ Angela Ziegler vừa là một người chữa lành không ai sánh bằng, một nhà khoa học lỗi lạc, vừa là một người kiên định đấu tranh vì hòa bình.',
    stats: { hp: 200, armor: 0, shield: 0, speed: 'Trung bình', difficulty: 1 },
    abilities: [
      { name: 'Caduceus Staff (Trượng Caduseus)', desc: 'Chiếu tia sáng hồi máu liên tục hoặc tăng cường sát thương cho đồng đội.' },
      { name: 'Caduceus Blaster (Súng Lục Caduceus)', desc: 'Súng lục tự động dự phòng nhỏ gọn, cho phép Mercy tự vệ khi cần thiết trong lúc không dùng trượng Caduceus.' },
      { name: 'Guardian Angel (Thiên thần hộ mệnh)', desc: 'Bay thật nhanh về phía một đồng đội đang hiển thị trong tầm nhìn.' },
      { name: 'Resurrect (Hồi sinh)', desc: 'Hồi sinh một đồng đội vừa bị hạ gục quay trở lại chiến trường ngay lập tức.' },
      { name: 'Valkyrie (Nữ Võ Thần)', desc: 'Bay lượn tự do trên không trung, cường hóa toàn diện năng lực của trượng Caduceus (lan tỏa hiệu ứng hồi máu/tăng sát thương cho các đồng minh xung quanh), tăng tầm bắn của súng lục và cho phép hồi chiêu Guardian Angel cực nhanh.' }
    ]
  },
  {
    id: 'zenyatta',
    name: 'Zenyatta',
    role: 'Support',
    image: 'image/Icon-Zenyatta.webp',
    bio: 'Zenyatta là một tu sĩ omnic, lang thang khắp thế gian để tìm kiếm sự giác ngộ tâm linh. Người ta kể rằng, bất cứ ai có dịp gặp gỡ ông đều sẽ thay đổi mãi mãi.',
    stats: { hp: 75, armor: 0, shield: 175, speed: 'Trung bình', difficulty: 3 },
    abilities: [
      { name: 'Orb of Destruction (Quả cầu hủy diệt)', desc: 'Bắn ra những quả cầu năng lượng sát thương chính xác cao hoặc tích tụ phóng liên tiếp.' },
      { name: 'Orb of Harmony (Quả cầu hòa hợp)', desc: 'Gắn quả cầu lên đồng đội để duy trì hồi máu liên tục theo thời gian từ xa.' },
      { name: 'Orb of Discord (Quả cầu bất hòa)', desc: 'Gắn quả cầu lên kẻ địch để tăng mạnh lượng sát thương mà mục tiêu đó phải nhận từ mọi nguồn.' },
      { name: 'Transcendence (Siêu việt)', desc: 'Bước vào trạng thái giác ngộ đỉnh cao, miễn nhiễm sát thương và hồi máu cực nhanh cho toàn bộ đồng minh xung quanh.' }
    ]
  }
];

// Elements
const heroGrid = document.getElementById('heroGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const tabWiki = document.getElementById('tabWiki');
const tabCompare = document.getElementById('tabCompare');
const wikiView = document.getElementById('wikiView');
const compareView = document.getElementById('compareView');

const selectHero1 = document.getElementById('selectHero1');
const selectHero2 = document.getElementById('selectHero2');
const compareResults = document.getElementById('compareResults');

const heroModal = document.getElementById('heroModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

let currentRole = 'All';

// 1. Render danh sách Wiki (Đã sắp xếp tự động A - Z)
function renderHeroes(heroes) {
  heroGrid.innerHTML = '';
  
  // Sắp xếp theo bảng chữ cái alphabet
  const sortedHeroes = [...heroes].sort((a, b) => a.name.localeCompare(b.name));

  if (sortedHeroes.length === 0) {
    heroGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Không tìm thấy hero phù hợp.</p>';
    return;
  }

  sortedHeroes.forEach(hero => {
    const card = document.createElement('div');
    card.className = 'hero-card';
    card.innerHTML = `
      <img src="${hero.image}" alt="${hero.name}" />
      <div class="hero-info">
        <div class="hero-name">${hero.name}</div>
        <div class="hero-role">${hero.role}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(hero));
    heroGrid.appendChild(card);
  });
}

// Lọc & Tìm kiếm
function filterData() {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = heroesData.filter(hero => {
    const matchesSearch = hero.name.toLowerCase().includes(query);
    const matchesRole = currentRole === 'All' || hero.role.toLowerCase() === currentRole.toLowerCase();
    return matchesSearch && matchesRole;
  });
  renderHeroes(filtered);
}

searchInput.addEventListener('input', filterData);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentRole = btn.getAttribute('data-role');
    filterData();
  });
});

// Chuyển đổi tab View
tabWiki.addEventListener('click', () => {
  tabWiki.classList.add('active');
  tabCompare.classList.remove('active');
  wikiView.classList.add('active');
  compareView.classList.remove('active');
});

tabCompare.addEventListener('click', () => {
  tabCompare.classList.add('active');
  tabWiki.classList.remove('active');
  compareView.classList.add('active');
  wikiView.classList.remove('active');
});

// 2. Xử lý tính năng So sánh tướng (Danh sách select cũng được sắp xếp A-Z)
function populateSelectOptions() {
  const sortedForSelect = [...heroesData].sort((a, b) => a.name.localeCompare(b.name));

  sortedForSelect.forEach(hero => {
    const opt1 = document.createElement('option');
    opt1.value = hero.id;
    opt1.textContent = hero.name;
    selectHero1.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = hero.id;
    opt2.textContent = hero.name;
    selectHero2.appendChild(opt2);
  });
}

function updateComparison() {
  const id1 = selectHero1.value;
  const id2 = selectHero2.value;

  if (!id1 || !id2) {
    compareResults.innerHTML = '<p class="placeholder-text" style="text-align:center;">Vui lòng chọn đầy đủ 2 tướng để so sánh.</p>';
    return;
  }

  const h1 = heroesData.find(h => h.id === id1);
  const h2 = heroesData.find(h => h.id === id2);

  const totalHp1 = h1.stats.hp + h1.stats.armor + h1.stats.shield;
  const totalHp2 = h2.stats.hp + h2.stats.armor + h2.stats.shield;

  compareResults.innerHTML = `
    <div class="compare-grid">
      <div class="compare-col">
        <img src="${h1.image}" alt="${h1.name}">
        <h3>${h1.name}</h3>
        <p style="color: var(--accent-blue); font-size: 0.9rem; text-transform:uppercase;">${h1.role}</p>
      </div>
      <div class="compare-stats-labels" style="font-weight: bold; text-align: center; color: var(--accent-orange); font-family: 'Chakra Petch'; font-size: 1.1rem;">
        THÔNG SỐ
      </div>
      <div class="compare-col">
        <img src="${h2.image}" alt="${h2.name}">
        <h3>${h2.name}</h3>
        <p style="color: var(--accent-blue); font-size: 0.9rem; text-transform:uppercase;">${h2.role}</p>
      </div>
    </div>

    <div style="margin-top: 1rem;">
      <div class="stat-row">
        <span class="stat-left">${h1.stats.hp}</span>
        <strong class="stat-label" style="color: var(--text-muted)">Máu (HP)</strong>
        <span class="stat-right">${h2.stats.hp}</span>
      </div>

      <div class="stat-row">
        <span class="stat-left">${h1.stats.armor}</span>
        <strong class="stat-label" style="color: var(--accent-armor)">Giáp (Armor)</strong>
        <span class="stat-right">${h2.stats.armor}</span>
      </div>

      <div class="stat-row">
        <span class="stat-left">${h1.stats.shield}</span>
        <strong class="stat-label" style="color: var(--accent-shield)">Khiên (Shield)</strong>
        <span class="stat-right">${h2.stats.shield}</span>
      </div>

      <div class="stat-row" style="font-weight: bold; border-top: 2px solid var(--accent-orange); background: rgba(255, 156, 0, 0.05);">
        <span class="stat-left" style="color: var(--accent-orange);">${totalHp1}</span>
        <strong class="stat-label" style="color: var(--text-main)">Tổng Sinh Lực</strong>
        <span class="stat-right" style="color: var(--accent-orange);">${totalHp2}</span>
      </div>

      <div class="stat-row">
        <span class="stat-left">${h1.stats.speed}</span>
        <strong class="stat-label" style="color: var(--text-muted)">Tốc độ di chuyển</strong>
        <span class="stat-right">${h2.stats.speed}</span>
      </div>

      <div class="stat-row">
        <span class="stat-left">${'⭐'.repeat(h1.stats.difficulty)}</span>
        <strong class="stat-label" style="color: var(--text-muted)">Độ khó kỹ năng</strong>
        <span class="stat-right">${'⭐'.repeat(h2.stats.difficulty)}</span>
      </div>
    </div>
  `;
}

selectHero1.addEventListener('change', updateComparison);
selectHero2.addEventListener('change', updateComparison);

// Modal Chi Tiết
function openModal(hero) {
  const totalHp = hero.stats.hp + hero.stats.armor + hero.stats.shield;
  
  modalBody.innerHTML = `
    <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem;">
      <img src="${hero.image}" alt="${hero.name}" style="width: 110px; height: 110px; border-radius: 8px; object-fit: cover; border: 2px solid var(--accent-blue);">
      <div>
        <h2 style="font-family: 'Chakra Petch'; color: var(--accent-orange); font-size: 1.8rem;">${hero.name}</h2>
        <p style="color: var(--accent-blue); font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem;">Vai trò: ${hero.role}</p>
        <p style="font-size: 0.95rem; color: var(--text-muted);">${hero.bio}</p>
      </div>
    </div>
    
    <div style="background: #0d1117; padding: 1rem; border-radius: 6px; border-left: 3px solid var(--accent-orange); margin-bottom: 1.5rem;">
      <h3 style="font-family: 'Chakra Petch'; font-size: 1rem; margin-bottom: 0.5rem; color: var(--text-main);">Chỉ số sinh lực:</h3>
      <p>❤️ Máu (HP): <strong>${hero.stats.hp}</strong></p>
      <p style="color: var(--accent-armor);">🛡️ Giáp (Armor): <strong>${hero.stats.armor}</strong></p>
      <p style="color: var(--accent-shield);">🔮 Khiên (Shield): <strong>${hero.stats.shield}</strong></p>
      <p style="margin-top: 0.3rem; border-top: 1px dashed var(--border-color); padding-top: 0.3rem;"><strong>Tổng HP:</strong> <span style="color: var(--accent-orange);">${totalHp}</span> | <strong>Độ khó:</strong> ${'⭐'.repeat(hero.stats.difficulty)}</p>
    </div>

    <h3 style="font-family: 'Chakra Petch'; font-size: 1.1rem; margin-bottom: 0.8rem;">Chi tiết kỹ năng:</h3>
    <div>
      ${hero.abilities.map(ab => `
        <div class="ability-card">
          <div class="ability-name">${ab.name}</div>
          <div class="ability-desc">${ab.desc}</div>
        </div>
      `).join('')}
    </div>
  `;
  heroModal.classList.add('active');
}

closeModal.addEventListener('click', () => heroModal.classList.remove('active'));
heroModal.addEventListener('click', (e) => {
  if (e.target === heroModal) heroModal.classList.remove('active');
});

// Khởi chạy ban đầu
renderHeroes(heroesData);
populateSelectOptions();