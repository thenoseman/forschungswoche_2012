# -*- encoding : utf-8 -*-
File.open("random_large_file.txt", "w") do |file|
  10000000.times do
    file.write("EIN ZEILE\n")
  end
end
