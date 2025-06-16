  // Page templates
    const pageTemplates = {
      'home': `
        <div class="logo-bar">
          <img src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png" alt="Logo">
          RôPhim - Ở nhà vẫn có phim hay
        </div>
        <div class="movie-banner">
          <img src="https://minhtuanmobile.com/uploads/blog/giai-thich-ket-phim-doraemon-movie-44-chi-tiet-250523110735.jpg" alt="Doraemon Movie 44">
          <div class="movie-title-banner">Doraemon Movie 44</div>
          <div class="play-icon">&#9658;</div>
        </div>
      `,
      'movie-management': `
        <div class="logo-bar">
          <img src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png" alt="Logo">
          Quản lý phim
        </div>
        
        <div class="thankbar">
          <span class="title">DANH SÁCH PHIM</span>
          <input type="text" id="searchInput" placeholder="Tìm tên phim...">
        </div>

        <div class="movie-grid" id="movieGrid">
          <!-- Movie cards will be loaded here -->
        </div>
      `,
      'Top-Phim': `
        <div class="logo-bar">
          <img src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png" alt="Logo">
          Top Phim
        </div>

        <div class="top-movie-container">
          <div class="top-movie-header">
            <h2>Top Phim</h2>
            <div>
              <input type="date" id="top-movie-date">
              <button class="filter-btn">Lọc</button>
            </div>
          </div>

          <div class="top-movie-tabs">
            <div class="top-movie-tab active">Top phim</div>
            <div class="top-movie-tab">Quản lý thanh toán</div>
          </div>

          <div class="top-movie-content">
            <div class="top-movie-list">
              <div class="top-movie-item">
                <div class="top-movie-rank">1</div>
                <img class="top-movie-poster" src="https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg" alt="Movie Poster">
                <div class="top-movie-info">
                  <div class="top-movie-title">Doraemon Movie 44</div>
                  <div class="top-movie-views">120% lượt xem</div>
                </div>
                <div class="top-movie-actions">
                  <button class="top-movie-button view-details">Chi tiết</button>
                  <button class="top-movie-button manage">Quản lý</button>
                </div>
              </div>

              <div class="top-movie-item">
                <div class="top-movie-rank">2</div>
                <img class="top-movie-poster" src="https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg" alt="Movie Poster">
                <div class="top-movie-info">
                  <div class="top-movie-title">Conan: Bản án đỏ</div>
                  <div class="top-movie-views">95% lượt xem</div>
                </div>
                <div class="top-movie-actions">
                  <button class="top-movie-button view-details">Chi tiết</button>
                  <button class="top-movie-button manage">Quản lý</button>
                </div>
              </div>

              <div class="top-movie-item">
                <div class="top-movie-rank">3</div>
                <img class="top-movie-poster" src="https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg" alt="Movie Poster">
                <div class="top-movie-info">
                  <div class="top-movie-title">Quật mộ trùng ma</div>
                  <div class="top-movie-views">80% lượt xem</div>
                </div>
                <div class="top-movie-actions">
                  <button class="top-movie-button view-details">Chi tiết</button>
                  <button class="top-movie-button manage">Quản lý</button>
                </div>
              </div>
            </div>

            <div class="top-movie-stats">
              <div class="stats-card">
                <div class="stats-title">Lượt xem theo ngày</div>
                <div class="stats-value">120%</div>
                <div class="stats-description">Nhiều đánh giá tích cực</div>
              </div>

              <div class="stats-card">
                <div class="stats-title">Đánh giá</div>
                <div class="stats-description">Phim giải trí, hài hước, vui nhộn. Diễn viên diễn tự nhiên, chân thực.</div>
              </div>

              <div class="stats-card">
                <div class="stats-title">Do quát lên trung chủ?</div>
                <div class="stats-description">Giữa sơ lớn Facebook</div>
              </div>
            </div>
          </div>
        </div>
      `,
      'reports': `
        <div class="logo-bar">
          <img src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png" alt="Logo">
          Thống kê & Báo cáo
        </div>
        <div style="padding: 30px;">
          <h2>📄 Thống kê lượt xem</h2>
          <div style="margin: 20px 0;">
            <input type="date" id="start-date"> → <input type="date" id="end-date">
            <button style="
              margin-left: 10px;
              padding: 6px 14px;
              background: linear-gradient(to right, #28a9cc, #22c1c3);
              color: white;
              border: none;
              border-radius: 8px;
              font-weight: bold;
              font-size: 14px;
              cursor: pointer;
              box-shadow: 0 2px 6px rgba(0,0,0,0.15);
              transition: all 0.25s ease-in-out;"
              onmouseover="this.style.transform='scale(1.05)'"
              onmouseout="this.style.transform='scale(1)'">
              🔍 Tìm kiếm
            </button>
          </div>
          <canvas id="reportChart" height="100"></canvas>
        </div>
      `,
      'revenue': `
        <div class="revenue-header">Doanh thu</div>
        <div class="revenue-tabs">
          <div class="revenue-tab active">📄 Doanh thu theo tháng</div>
          <div class="revenue-tab">📊 Bảng số liệu chi tiết</div>
        </div>
        <div class="revenue-content">
          <div class="revenue-left">
            <div class="date-range">
              <label>📅 01/04–05/05</label>
              <button title="Tìm kiếm" style="background: #28a9cc; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">🔍</button>
            </div>
            <canvas class="revenue-canvas" id="revenueChart" width="400" height="250"></canvas>
          </div>
          <div class="revenue-right">
            <table class="revenue-table">
              <thead>
                <tr>
                  <th>Tháng</th>
                  <th>Doanh thu (VND)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Tháng 4</td><td>120,000,000</td></tr>
                <tr><td>Tháng 5</td><td>90,000,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      'user-behavior': `
        <div class="logo-bar">
          <img src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png" alt="Logo">
          Phân tích hành vi người dùng
        </div>
        
        <div class="behavior-container">
          <h2>Phân tích hành vi xem phim</h2>
          
          <div class="behavior-chart-container">
            <canvas id="userBehaviorChart" width="200" height="200"></canvas>
            
            <div class="behavior-chart-info">
              <div class="behavior-legend">
                <div><span class="behavior-complete"></span>Hoàn thành: 40%</div>
                <div><span class="behavior-drop"></span>Bỏ dở: 60%</div>
              </div>
              
              <table class="behavior-table">
                <tr><th>Tên phim</th><th>Tỷ lệ hoàn thành</th><th>Tỷ lệ bỏ dở</th></tr>
                <tr><td>Doraemon Movie 44</td><td>45%</td><td>55%</td></tr>
                <tr><td>Conan: Bản án đỏ</td><td>35%</td><td>65%</td></tr>
                <tr><td>Địa đạo</td><td>30%</td><td>70%</td></tr>
                <tr><td>Jurassic Park</td><td>50%</td><td>50%</td></tr>
              </table>
            </div>
          </div>
        </div>
      `,
      'payment': `
        <div class="logo-bar">
          <img src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png" alt="Logo">
          Quản lý thanh toán
        </div>
        <table class="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Phương thức</th>
              <th>Số tiền</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
                        <tr>
              <td>1001</td>
              <td>Ví điện tử</td>
              <td>50,000đ</td>
              <td>Thành công</td>
            </tr>
            <tr>
              <td>1002</td>
              <td>Thẻ tín dụng</td>
              <td>100,000đ</td>
              <td>Đang xử lý</td>
            </tr>
          </tbody>
        </table>
      `,
      'invoice': `
        <div class="logo-bar">
          <img src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png" alt="Logo">
          Xuất báo cáo
        </div>
        
        <div class="export-container">
          <h2>Xuất báo cáo doanh thu</h2>
          
          <div class="export-preview">
            <h3>Nội dung xem trước báo cáo</h3>
            <table class="export-preview-table">
              <thead>
                <tr>
                  <th>Tên phim</th>
                  <th>Tổng số lượt xem</th>
                  <th>Tổng doanh thu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SUGA</td>
                  <td>32,000</td>
                  <td>8,677,300 VND</td>
                </tr>
                <tr>
                  <td>Kung fu Panda</td>
                  <td>11,000</td>
                  <td>4,282,000 VND</td>
                </tr>
                <tr>
                  <td>Quý cải</td>
                  <td>26,000</td>
                  <td>7,791,000 VND</td>
                </tr>
                <tr>
                  <td>Quật mô trùng ma</td>
                  <td>8,000</td>
                  <td>2,671,000 VND</td>
                </tr>
                <tr>
                  <td>Monkey bào thú</td>
                  <td>23,000</td>
                  <td>6,118,000 VND</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <button class="export-button" onclick="showExportModal()">Xuất báo cáo</button>
          <div id="exportSuccess" class="export-success"></div>
        </div>
        
        <!-- Export Modal -->
        <div id="exportModal" class="export-modal">
          <div class="export-modal-content">
            <div class="export-modal-title">Xuất báo cáo</div>
            
            <div id="wordOption" class="export-option-modal" onclick="selectExportOption('word')">
              Microsoft Word
            </div>
            
            <div id="opendocumentOption" class="export-option-modal" onclick="selectExportOption('opendocument')">
              Opendocument
            </div>
            
            <div id="textOption" class="export-option-modal" onclick="selectExportOption('text')">
              Văn bản đa thức
            </div>
            
            <div id="pdfOption" class="export-option-modal" onclick="selectExportOption('pdf')">
              Định dạng PDF
            </div>
            
            <div class="export-modal-buttons">
              <button class="export-cancel" onclick="hideExportModal()">Hủy</button>
              <button class="export-confirm" onclick="confirmExport()">Xuất</button>
            </div>
          </div>
        </div>
      `,
      'movie-details': `
        <div class="logo-bar">
          <img src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png" alt="Logo">
          Chi tiết phim
        </div>
        
        <div class="movie-details">
          <h2>Chi tiết phim</h2>
          
          <div class="movie-details-header">
            <img class="movie-details-poster" src="https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg" alt="Doraemon Movie 44">
            
            <div class="movie-details-info">
              <div class="movie-details-title">Doraemon Movie 44</div>
              <div class="movie-details-meta">Hoạt hình, Hài hước, Gia đình | 110 phút | 2023</div>
              <div class="movie-details-description">
                Phim kể về cuộc phiêu lưu mới nhất của Doraemon và nhóm bạn Nobita, Shizuka, Suneo và Jaian. 
                Lần này, họ sẽ phải đối mặt với một thế lực hắc ám đe dọa đến sự tồn vong của Trái đất. 
                Với sự giúp đỡ của những bảo bối thần kỳ, liệu nhóm bạn có thể bảo vệ được hành tinh xanh?
              </div>
            </div>
          </div>
          
          <div class="movie-details-stats">
            <div class="movie-details-stat">
              <div class="movie-details-stat-value">120%</div>
              <div class="movie-details-stat-label">Lượt xem</div>
            </div>
            <div class="movie-details-stat">
              <div class="movie-details-stat-value">4.8/5</div>
              <div class="movie-details-stat-label">Đánh giá</div>
            </div>
            <div class="movie-details-stat">
              <div class="movie-details-stat-value">95%</div>
              <div class="movie-details-stat-label">Tỷ lệ hoàn thành</div>
            </div>
          </div>
          
          <div class="movie-details-reviews">
            <h3>Đánh giá</h3>
            
            <div class="movie-details-review">
              <div class="movie-details-review-header">
                <div class="movie-details-review-avatar"></div>
                <div class="movie-details-review-user">Nguyễn Văn A</div>
                <div class="movie-details-review-rating">★★★★★</div>
              </div>
              <div class="movie-details-review-content">
                Phim giải trí, hài hước, vui nhộc. Diễn viên diễn tự nhiên, chân thực. 
                Cốt truyện hấp dẫn, hình ảnh đẹp, âm thanh sống động. Rất đáng xem!
              </div>
            </div>
            
            <div class="movie-details-review">
              <div class="movie-details-review-header">
                <div class="movie-details-review-avatar"></div>
                <div class="movie-details-review-user">Trần Thị B</div>
                <div class="movie-details-review-rating">★★★★☆</div>
              </div>
              <div class="movie-details-review-content">
                Phim hay nhưng hơi dài. Phần đầu hơi chậm nhưng càng về sau càng hấp dẫn. 
                Hiệu ứng hình ảnh đẹp, âm nhạc phù hợp. Nên xem cùng gia đình.
              </div>
            </div>
          </div>
        </div>
      `,
      'key-management': `
        <div class="logo-bar">
          <img src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png" alt="Logo">
          Quản lý phím
        </div>
        
        <div class="key-management">
          <h2>Quản lý phím</h2>
          
          <div class="key-management-grid">
            <div class="key-management-card">
              <h3>Top phím</h3>
              <p>Quản lý các phím được sử dụng nhiều nhất</p>
              <button>Xem chi tiết</button>
            </div>
            
            <div class="key-management-card">
              <p>Theo dõi và quản lý các phím ít sử dụng</p>
              <button>Xem chi tiết</button>
            </div>
            
            <div class="key-management-card">
              <h3>Quản lý thanh toán</h3>
              <p>Xử lý các giao dịch thanh toán liên quan</p>
              <button>Xem chi tiết</button>
            </div>
          </div>
        </div>
      `
    };

    // Sample movie data for movie management
    const movies = [
      { title: 'Doraemon Movie 44', img: 'https://minhtuanmobile.com/uploads/blog/giai-thich-ket-phim-doraemon-movie-44-chi-tiet-250523110735.jpg' },
      { title: 'ONE PIECE RED', img: 'https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg' },
      { title: 'Spirited Away', img: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg' },
      { title: 'Conan: Bản án đỏ', img: 'https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg' },
      { title: 'Quật mộ trùng ma', img: 'https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg' }
    ];

    // Initialize the page
    document.addEventListener('DOMContentLoaded', function() {
      // Set up sidebar toggle
      document.getElementById('toggleBtn').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('hidden');
      });

      // Set up submenu toggles
      document.getElementById('toggleMovieMenu').addEventListener('click', function() {
        const menu = document.getElementById('movieMenu');
        menu.classList.toggle('open');
        this.innerHTML = menu.classList.contains('open') ? 'Quản lý phim ▾' : 'Quản lý phim ▸';
      });

      document.getElementById('toggleReportMenu').addEventListener('click', function() {
        const menu = document.getElementById('reportMenu');
        menu.classList.toggle('open');
        this.innerHTML = menu.classList.contains('open') ? 'Thống kê & Báo cáo ▾' : 'Thống kê & Báo cáo ▸';
      });

      document.getElementById('toggleRevenueMenu').addEventListener('click', function() {
        const menu = document.getElementById('revenueMenu');
        menu.classList.toggle('open');
        this.innerHTML = menu.classList.contains('open') ? 'Doanh thu ▾' : 'Doanh thu ▸';
      });

      // Set up menu item clicks
      document.querySelectorAll('.menu a[data-page]').forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          const page = this.getAttribute('data-page');
          loadPage(page);
        });
      });

      // Load home page by default
      loadPage('home');
    });

    // Load a specific page
    function loadPage(page) {
      const mainContent = document.getElementById('main-content');
      mainContent.innerHTML = pageTemplates[page];

      // Initialize page-specific functionality
      switch(page) {
        case 'movie-management':
          renderMovieManagement();
          break;
        case 'reports':
          initializeChart();
          break;
        case 'revenue':
          renderRevenueChart();
          break;
        case 'user-behavior':
          renderUserBehaviorChart();
          break;
        case 'Top-Phim':
          setupTopMovieTabs();
          break;
        case 'invoice':
          setupExportReport();
          break;
      }
    }

    // Render movie management page
    function renderMovieManagement() {
      const movieGrid = document.getElementById('movieGrid');
      movieGrid.innerHTML = '';

      movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
          <button class="button btn-delete">Xoá</button>
          <img src="${movie.img}" alt="${movie.title}">
          <div class="movie-title">${movie.title}</div>
          <div class="button-group">
            <button class="button btn-edit">Sửa</button>
            <button class="button btn-detail">Xem chi tiết</button>
          </div>
        `;

        // Add delete functionality
        card.querySelector('.btn-delete').addEventListener('click', function() {
          if (confirm('Bạn có chắc chắn muốn xoá phim này không?')) {
            card.remove();
          }
        });

        // Add detail functionality
        card.querySelector('.btn-detail').addEventListener('click', function() {
          loadPage('movie-details');
        });

        movieGrid.appendChild(card);
      });

      // Add search functionality
      document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = movies.filter(movie => 
          movie.title.toLowerCase().includes(searchTerm)
        );
        
        // Re-render filtered movies
        movieGrid.innerHTML = '';
        filtered.forEach(movie => {
          const card = document.createElement('div');
          card.className = 'movie-card';
          card.innerHTML = `
            <button class="button btn-delete">Xoá</button>
            <img src="${movie.img}" alt="${movie.title}">
            <div class="movie-title">${movie.title}</div>
            <div class="button-group">
              <button class="button btn-edit">Sửa</button>
              <button class="button btn-detail">Xem chi tiết</button>
            </div>
          `;
          movieGrid.appendChild(card);
        });
      });
    }

    // Initialize chart for reports page
    function initializeChart() {
      const ctx = document.getElementById('reportChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['01/04', '05/04', '10/04', '15/04', '20/04', '25/04', '30/04'],
          datasets: [{
            label: 'Lượt xem',
            data: [1000, 2500, 5000, 4200, 6000, 4800, 7000],
            borderColor: '#28a9cc',
            backgroundColor: 'rgba(40, 169, 204, 0.1)',
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              callbacks: {
                label: ctx => `${ctx.parsed.y.toLocaleString()} lượt xem`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Render revenue chart
    function renderRevenueChart() {
      const ctx = document.getElementById('revenueChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Tháng 4', 'Tháng 5'],
          datasets: [{
            label: 'Doanh thu',
            data: [120000000, 90000000],
            backgroundColor: ['#28a9cc', '#28a9cc'],
            borderRadius: 5
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function(context) {
                  let value = context.raw.toLocaleString('vi-VN') + ' VND';
                  return ' ' + value;
                }
              }
            }
          },
          scales: {
            y: {
              ticks: {
                callback: function(value) {
                  return value.toLocaleString('vi-VN');
                }
              }
            }
          }
        }
      });
    }

    // Render user behavior chart
    function renderUserBehaviorChart() {
      const ctx = document.getElementById('userBehaviorChart').getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Hoàn thành', 'Bỏ dở'],
          datasets: [{
            data: [40, 60],
            backgroundColor: ['#28a9cc', '#e74c3c']
          }]
        },
        options: {
          responsive: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `${context.label}: ${context.raw}%`;
                }
              }
            }
          }
        }
      });
    }

    // Setup top movie tabs
    function setupTopMovieTabs() {
      const tabs = document.querySelectorAll('.top-movie-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', function() {
          tabs.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
          
          // In a real app, this would load different content based on the tab
          if (this.textContent.includes('Top phim')) {
            // Load top movies
            // Load tail movies
          } else if (this.textContent.includes('Quản lý thanh toán')) {
            // Load payment management
          }
        });
      });
      
      // Setup click handlers for view details buttons
      document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
          loadPage('movie-details');
        });
      });
      
      // Setup click handlers for manage buttons
      document.querySelectorAll('.manage').forEach(button => {
        button.addEventListener('click', function() {
          loadPage('key-management');
        });
      });
    }

    // Setup export report functionality
    function setupExportReport() {
      // This is already set up in the template with onclick handlers
    }

    // Export modal functions
    function showExportModal() {
      document.getElementById('exportModal').style.display = 'block';
    }

    function hideExportModal() {
      document.getElementById('exportModal').style.display = 'none';
    }

    function selectExportOption(format) {
      // Bỏ chọn tất cả các option
      document.querySelectorAll('.export-option-modal').forEach(option => {
        option.classList.remove('selected');
      });
      
      // Chọn option được click
      document.getElementById(format + 'Option').classList.add('selected');
      
      // Lưu định dạng được chọn
      window.selectedExportFormat = format;
    }

    function showToast() {
  const toast = document.getElementById('logoutNotification');
  toast.style.display = 'block';

  // Tự ẩn sau 3 giây
  setTimeout(() => {
    hideToast();
  }, 3000);
}

function hideToast() {
  const toast = document.getElementById('logoutNotification');
  toast.style.display = 'none';
}

function confirmExport() {
  hideExportModal();
  showToast();

  const successMessage = document.getElementById('exportSuccess');
  const logoutNotification = document.getElementById('logoutNotification');
  
  // Set nội dung và hiển thị
  successMessage.textContent = `✅ Xuất ${window.selectedExportFormat || 'PDF'} thành công!`;
  successMessage.classList.add('show');
  logoutNotification.classList.add('show');

  // Sau 3 giây thì ẩn đi
  setTimeout(() => {
    successMessage.classList.remove('show');
    logoutNotification.classList.remove('show');
    
    // Đợi hiệu ứng fade-out xong rồi mới display none
    setTimeout(() => {
      successMessage.style.display = 'none';
      logoutNotification.style.display = 'none';
    }, 500);
  }, 3000);

  // Log
  console.log('Đang xuất file định dạng:', window.selectedExportFormat || 'PDF');
}