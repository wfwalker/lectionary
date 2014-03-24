  // def check_lent_easter_pentecost
  //   return_value = []
  //   return [] if @date < (easter(@year) - 48.days)
  //   return [] if @date > (easter(@year) + 56.days)
  //   return_value << 'Ash Wednesday' if @date == easter(@year) - 46.days
  //   1.upto(5) do |x|
  //     return_value << full_title("Lent #{x}") if @date == easter(@year) - 49.days + (x * 7).days
  //   end
  //   return_value << 'Holy Thursday' if @date == easter(@year) - 3.days
  //   return_value << 'Good Friday' if @date == easter(@year) - 2.days
  //   return_value << 'Ascension' if @date == easter(@year) + 39.days
  //   return_value << full_title('Passion') if @date == easter(@year) - 7.days
  //   return_value << full_title('Palms') if @date == easter(@year) - 7.days
  //   return_value << full_title('Easter Day') if @date == easter(@year)
  //   2.upto(7) do |x|
  //     return_value << full_title("Easter #{x}") if @date == easter(@year) + ((x - 1) * 7).days
  //   end
  //   return_value << full_title('Pentecost Day') if @date == easter(@year) + 49.days
  //   return_value << full_title('Trinity') if @date == easter(@year) + 56.days
  //   return_value
  // end
