<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Calculation</title>
</head>
<body>

    <?php
    $converted_value = "";

    if (isset($_POST['convert'])) {
        $from_value = floatval($_POST['from_value']);
        $from_currency = $_POST['from_currency'];
        $to_currency = $_POST['to_currency'];
        $exchange_rates = [
            "USD" => ["USD" => 1, "CAD" => 1.35, "EUR" => 0.91],
            "CAD" => ["USD" => 0.74, "CAD" => 1, "EUR" => 0.67],
            "EUR" => ["USD" => 1.10, "CAD" => 1.50, "EUR" => 1]
        ];

        if (isset($exchange_rates[$from_currency][$to_currency])) {
            $converted_value = $from_value * $exchange_rates[$from_currency][$to_currency];
        } else {
            $converted_value = "Error!";
        }
    }
    ?>

    <form method="POST">
        <table>
            <tr>
                <td>From:</td>
                <td>
                    <input type="text" name="from_value" value="<?php echo isset($_POST['from_value']) ? $_POST['from_value'] : ''; ?>" required/>
                </td>
                <td>Currency:</td>
                <td>
                    <select name="from_currency">
                        <option value="USD" <?php if(isset($_POST['from_currency']) && $_POST['from_currency'] == "USD") echo "selected"; ?>>USD</option>
                        <option value="CAD" <?php if(isset($_POST['from_currency']) && $_POST['from_currency'] == "CAD") echo "selected"; ?>>CAD</option>
                        <option value="EUR" <?php if(isset($_POST['from_currency']) && $_POST['from_currency'] == "EUR") echo "selected"; ?>>EUR</option>
                    </select>
                </td>    
            </tr>
            <tr>
                <td>To:</td>
                <td>
                    <input type="text" name="to_value" value="<?php echo $converted_value; ?>" readonly/>
                </td>
                <td>Currency:</td>
                <td>
                    <select name="to_currency">
                        <option value="USD" <?php if(isset($_POST['to_currency']) && $_POST['to_currency'] == "USD") echo "selected"; ?>>USD</option>
                        <option value="CAD" <?php if(isset($_POST['to_currency']) && $_POST['to_currency'] == "CAD") echo "selected"; ?>>CAD</option>
                        <option value="EUR" <?php if(isset($_POST['to_currency']) && $_POST['to_currency'] == "EUR") echo "selected"; ?>>EUR</option>
                    </select>
                </td>    
            </tr>
            <tr>
                <td colspan="4" style="text-align:right;">
                    <input type="submit" name="convert" value="Convert"/>
                </td>    
            </tr>
        </table>
    </form>        

</body>
</html>
