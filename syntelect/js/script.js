$(function () {
  var $contactForm = $("#contacts form");
  var $formData = [];
  var $formSubmint = $contactForm.find("button.button");
  var $formFile = $contactForm.find("label");
  $formData.name = $contactForm.find('input[name="name"]');
  $formData.mail = $contactForm.find('input[name="email"]');
  $formData.file = $contactForm.find('input[name="file"]');
  $formData.subject = $contactForm.find('input[name="subject"]');
  $formData.texta = $contactForm.find('input[name="textArea"]');
  $formFile.click(function () {
    fileSelect();
  })
  $contactForm.submit(function () {
    submit()
  })
  function fileSelect () {
    var $input = $formFile.find('input[type="file"]');
    var $placeHold = $formFile.find("span:first");
    $input.change(function () {
      $placeHold.text($formData.file["0"].files["0"].name);
    })
  }
  function submit () {
    alert("name:" + $formData.name
    + "\r Email:" + $formData.mail
    + "\r file:" + $formData.file["0"].files["0"].name
    + "\r subject:" + $formData.subject
    + "\r textarea:" + $formData.texta);
  }
})