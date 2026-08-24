# 📁 Images — Hướng Dẫn Quản Lý Ảnh MilkStore

## Cấu Trúc Thư Mục

```
images/
├── products/     ← Ảnh sản phẩm sữa (tên file: product-<id>.jpg)
├── brands/       ← Logo hãng sữa (tên file: brand-<name>.png / .svg)
├── banners/      ← Ảnh banner hero slider (banner-1.jpg, banner-2.jpg, banner-3.jpg)
└── icons/        ← Icon phương thức thanh toán (momo.png, zalopay.png, vnpay.png...)
```

## Quy Tắc Đặt Tên

| Folder | Quy tắc | Ví dụ |
|--------|---------|-------|
| `products/` | `product-{id}.jpg` | `product-1.jpg` |
| `brands/` | `brand-{tên thường}.png` | `brand-vinamilk.png` |
| `banners/` | `banner-{số}.jpg` | `banner-1.jpg` |
| `icons/` | `{tên}.png` | `momo.png` |

## Kích Thước Khuyến Nghị

- **products/**: 500×500px (1:1), JPEG, max 150KB
- **brands/**: 200×80px (logo ngang), PNG có nền trong suốt
- **banners/**: 1920×700px, JPEG, max 400KB
- **icons/**: 64×64px, PNG/SVG

## Cập Nhật Đường Dẫn Ảnh

Sau khi thêm ảnh thực vào folder `products/`, cập nhật mảng `products` trong `script.js`:
```js
image: "images/products/product-1.jpg"
```
