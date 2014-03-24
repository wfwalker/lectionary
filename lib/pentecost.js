//   def check_ordinary_time
//     return_value = []
//     return [] if @date < easter(@year) + 57.days
//     return [] if @date >= advent(@year)
//     trinity = easter(@year) + 56.days
//     base = previous_sunday(Date.new(@year, 5, 27))
//     3.upto(29) do |x|
//       next if base < trinity
//       return_value << full_title("Proper #{x}") if @date == base + ((x - 3) * 7).days
//     end
//     return_value << full_title('All Saints') if @date == Date.new(@year, 11, 1)
//     return_value << full_title('Thanksgiving') if @date == thanksgiving(@year)
//     return_value
//   end
// end
