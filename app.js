const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionContent = header.nextElementSibling;
    
    accordionItem.classList.toggle("active");
    
    if (accordionItem.classList.contains("active")) {
      accordionContent.style.display = "block";
    } else {
      accordionContent.style.display = "none";
    }
  });
});

