#include <stdio.h>
#include <math.h>
#include <time.h>
int asq = 0;
int bsq = 0;
int csq = 0;
int a = 0;
int b = 0;
int c = 0;
int prod = 0;
int end = 0;

int main() {
    double time_spent = 0;
    clock_t begin = clock();
    
    
    for (a=1; a<1000; a++) {
        for (b=a+1; b<1000 - a; b++) {
            for (c=b+1; c<1000 - b; c++) {
            if (a + b + c == 1000 && a*a + b*b == c*c){
            printf(" prod is ");
            prod = a * b * c;
            printf("%d", prod);
            clock_t end = clock();
            time_spent = (double)(end - begin) / CLOCKS_PER_SEC;
            printf("Time elapsed is %f seconds", time_spent);
            return;
            }
            }
        }
      
}
}