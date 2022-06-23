// Tìm x của phương trình bậc 2
    function findX(a,b,c) {
            var d=b*b -4*a*c;
            if (d<0) {
                return 'Phương trình vô nghiệm' ;
            } 
            else if (d==0) {
                return -b/(2*a);
            }
            else {
                return [(-b+ math.sqrt(d))/(2*a), (-b- math.sqrt(d))/(2*a)];
            }
        }
    var result= findX(2,2,1);
    console.log('X bằng:', result);
