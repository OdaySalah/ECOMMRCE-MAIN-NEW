// إيقاف تشغيل السلايدر عند تمرير الماوس واستئنافه عند إزالته

document.querySelectorAll(".description").forEach(function(desc) {
  const fullText = desc.getAttribute("data-full");
  const maxLength = 50; // عدد الأحرف المسموح به
  if (fullText.length > maxLength) {
    const shortText = fullText.substring(0, maxLength) + "...";
    desc.textContent = shortText;
  }
});

// الحصول على جميع العناصر التي تحتوي على الوصف
const descriptions = document.querySelectorAll(".description");

// إضافة الأحداث لكل عنصر وصف
descriptions.forEach(description => {
  const fullText = description.getAttribute("data-full"); // النص الكامل
  const shortText = description.textContent; // النص المختصر

  // إظهار النص الكامل عند تمرير الماوس
  description.addEventListener("mouseenter", function() {
    description.textContent = fullText;
    description.classList.add("full"); // إضافة كلاس للتحكم بالستايل
  });

  // إرجاع النص المختصر عند إزالة الماوس
  description.addEventListener("mouseleave", function() {
    description.textContent = shortText;
    description.classList.remove("full"); // إزالة الكلاس
  });
});
