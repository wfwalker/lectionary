  // def check_epiphany
  //   return_value = []
  //   return [] if @date < epiphany(@year)
  //   return [] if @date > easter(@year) - 49.days
  //   return_value << 'Epiphany Day' if @date == epiphany(@year)
  //   baptism = next_sunday(epiphany(@year))
  //   return_value << full_title('Baptism') if @date == baptism
  //   transfiguration = easter(@year) - 49.days
  //   2.upto(8) do |x|
  //     current = baptism + ((x - 1) * 7).days
  //     break if current == transfiguration
  //     return_value << full_title("Epiphany #{x}") if @date == current
  //   end
  //   return_value << full_title('Transfiguration') if @date == transfiguration
  //   return_value
  // end
