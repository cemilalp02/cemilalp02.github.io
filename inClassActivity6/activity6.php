<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Registration Form</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

  <h2>Registration Form</h2>

  <div class="form-container">
    <form action="Activity6-preview.php" method="post">
      
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name">
      </div>

      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username">
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password">
      </div>

      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" name="address" id="address">
      </div>

      <div class="form-group">
        <label for="country">Country:</label>
        <select name="country" id="country">
          <option value="">(Please select a country)</option>
          <option value="America">America</option>
          <option value="Turkey">Turkey</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
        </select>
      </div>

      <div class="form-group">
        <label for="zip">ZIP Code:</label>
        <input type="text" name="zip" id="zip">
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
      </div>

      <div class="form-group">
        <label>Sex:</label>
        <div class="radio-group">
          <label><input type="radio" name="sex" value="Male"> Male</label>
          <label><input type="radio" name="sex" value="Female"> Female</label>
        </div>
      </div>

      <div class="form-group">
        <label>Language:</label>
        <div class="checkbox-group">
          <label><input type="checkbox" name="language[]" value="English"> English</label>
          <label><input type="checkbox" name="language[]" value="French"> French</label>
          <label><input type="checkbox" name="language[]" value="German"> German</label>
        </div>
      </div>

      <div class="form-group">
        <label for="about">About:</label>
        <textarea name="about" id="about" rows="4"></textarea>
      </div>

      <div class="form-group">
        
        <input type="submit" value="submit" class="submit-btn">
      </div>

    </form>
  </div>

</body>
</html>
